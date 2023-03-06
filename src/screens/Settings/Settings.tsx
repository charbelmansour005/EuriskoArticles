// react + paper imports
import React, {useState} from 'react'
import {StyleSheet, View, ScrollView, Alert} from 'react-native'
import {Button, Provider, Snackbar, Text} from 'react-native-paper'
// redux
import {toggleLanguage} from '../../features/language/languageSlice'
import {storeCurrentUser} from '../../features/user/userSlice'
import {useAppSelector, useAppDispatch} from '../../app/rtkHooks'
// helpers
import {themeColors} from '../../helpers/themeColors'
import {Durations} from '../../helpers/toasts'
import {rippleColors} from '../../helpers/rippleColors'
// extra libraries
import {useToast} from 'react-native-toast-notifications'
import LinearGradient from 'react-native-linear-gradient'
// components
import {
  SettingsButtons,
  SettingsFeatures,
  SettingsLangSwitch,
} from '../../components/index'
// navigation
import {useNavigation} from '@react-navigation/native'
// keychain
import * as Keychain from 'react-native-keychain'

type Nav = {
  navigate: (value: string) => void
}

const Settings = (): JSX.Element => {
  const {navigate} = useNavigation<Nav>()
  const toast = useToast()
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const language = useAppSelector(state => state.language)

  const onToggleSwitch = (): void => {
    dispatch(toggleLanguage())
    setSnackbarVisible(!snackbarVisible)
  }

  const logoutHandler = async (): Promise<void> => {
    // cutting the use of token for fetching data
    await Keychain.resetGenericPassword()
    // removing secure screens
    dispatch(storeCurrentUser({accessToken: null}))
  }

  var warningTitle = language.english ? `Warning` : `Attention`
  var warningBody = language.english
    ? `You are about to logout`
    : `Vous êtes sur le point de vous déconnecter`
  var warningText = language.english ? `Cancel` : `Annuler`
  var confirmText = language.english ? `Continue` : `Déconnecter`

  const askLogout = (): void =>
    Alert.alert(
      warningTitle,
      warningBody,
      [
        {
          // no => passed : recieve cancel behavior
          text: warningText,
          style: 'cancel',
        },
        {
          // logout
          text: confirmText,
          onPress: (): void => {
            logoutHandler()
          },
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    )

  const randomRippleColor = rippleColors[Math.floor(Math.random() * 10)]
  const chosenRippleColor: string = randomRippleColor

  const onDismissSnackBar = (): void => setSnackbarVisible(false)

  var snackLabel = language.english ? 'Annuler' : 'Undo'
  var snackText = language.english
    ? 'Vous avez choisi la langue Anglaise'
    : 'You changed the language to French'

  const showModal = (): void => setIsVisible(true)
  const hideModal = (): void => setIsVisible(false)

  const testToast = (): void => {
    hideModal()
    toast.show('Testing... Swipe to close', {
      type: 'normal',
      duration: Durations.SHORT,
      animationType: 'zoom-in',
      placement: 'top',
    })
  }

  return (
    <LinearGradient
      colors={['white', 'white', 'white', themeColors.transparentGray]}
      style={{width: '100%', height: '100%'}}>
      <ScrollView>
        <Text style={styles.BoldSmall}>
          {language.english ? `System Language` : `Langue du Système`}
        </Text>
        <SettingsLangSwitch
          onToggleSwitch={onToggleSwitch}
          language={language}
        />
        <View>
          <Snackbar
            style={{
              backgroundColor: themeColors.pitchblack,
            }}
            theme={{colors: {inversePrimary: themeColors.white}}}
            visible={snackbarVisible}
            duration={Durations.SHORT}
            onDismiss={onDismissSnackBar}
            action={{
              label: snackLabel,
              onPress: () => {
                dispatch(toggleLanguage())
              },
            }}>
            {snackText}
          </Snackbar>
        </View>
        <SettingsButtons
          askLogout={askLogout}
          chosenRippleColor={chosenRippleColor}
          navigate={navigate}
          language={language}
        />
        <View style={{marginTop: 20}}>
          <Provider>
            <SettingsFeatures
              hideModal={hideModal}
              testToast={testToast}
              chosenRippleColor={chosenRippleColor}
              isVisible={isVisible}
            />
            <Button
              style={{
                backgroundColor: themeColors.pitchblack,
                marginHorizontal: '30%',
                borderRadius: 5,
              }}
              onPress={showModal}>
              <Text style={{color: themeColors.white, fontWeight: '300'}}>
                Update Notes
              </Text>
            </Button>
          </Provider>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Settings

const styles = StyleSheet.create({
  BoldSmall: {
    marginLeft: 25,
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 13,
  },
  rippleButton: {
    padding: 8,
    backgroundColor: '#5865F2',
    borderRadius: 3,
    width: '100%',
    borderWidth: 1,
    borderColor: '#5865F2',
    marginVertical: 1,
    height: 50,
  },
  rippleText: {
    textAlign: 'center',
    letterSpacing: 0,
    color: 'white',
    fontWeight: 'bold',
  },
})
