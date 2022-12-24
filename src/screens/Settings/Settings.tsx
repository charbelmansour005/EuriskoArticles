import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import {Text} from 'react-native-paper';
import {rippleColors} from '../../helpers/rippleColors';
import {useAppSelector, useAppDispatch} from '../../app/rtkHooks';
import {toggleLanguage} from '../../features/language/languageSlice';
import {Snackbar} from 'react-native-paper';
import React, {useState} from 'react';
import {themeColors} from '../../helpers/themeColors';
import {storeCurrentUser} from '../../features/user/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Provider} from 'react-native-paper';
import {useToast} from 'react-native-toast-notifications';
import {Durations} from '../../helpers/toasts';
import {useNavigation} from '@react-navigation/native';
import {
  SettingsButtons,
  SettingsFeatures,
  Copyright,
  SettingsLangSwitch,
} from '../../components/index';

type Nav = {
  navigate: (value: string) => void;
};

const Settings = (): JSX.Element => {
  const {navigate} = useNavigation<Nav>();
  const toast = useToast();
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const language = useAppSelector(state => state.language);

  const onToggleSwitch = (): void => {
    dispatch(toggleLanguage());
    setSnackbarVisible(!snackbarVisible);
  };

  const logoutHandler = async (): Promise<void> => {
    await AsyncStorage.clear();
    dispatch(storeCurrentUser({accessToken: null}));
  };

  var warningTitle = language.english ? `Warning` : `Attention`;
  var warningBody = language.english
    ? `You are about to logout`
    : `Vous êtes sur le point de vous déconnecter`;
  var warningText = language.english ? `Cancel` : `Annuler`;
  var confirmText = language.english ? `Continue` : `Déconnecter`;

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
            logoutHandler();
          },
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );

  const randomRippleColor = rippleColors[Math.floor(Math.random() * 10)];
  const chosenRippleColor: string = randomRippleColor;

  const onDismissSnackBar = (): void => setSnackbarVisible(false);

  var snackLabel = language.english ? 'Annuler' : 'Undo';
  var snackText = language.english
    ? 'Vous avez choisi la langue Anglaise'
    : 'You changed the language to French';

  const showModal = (): void => setIsVisible(true);
  const hideModal = (): void => setIsVisible(false);

  const testToast = (): void => {
    hideModal();
    toast.show('Testing... Swipe to close', {
      type: 'normal',
      duration: Durations.SHORT,
      animationType: 'zoom-in',
      placement: 'top',
    });
  };

  return (
    <ScrollView>
      <Text style={styles.BoldSmall}>
        {language.english ? `System Language` : `Langue du Système`}
      </Text>
      <SettingsLangSwitch onToggleSwitch={onToggleSwitch} />
      <View>
        <Snackbar
          style={{
            backgroundColor: themeColors.salmon,
          }}
          theme={{colors: {inversePrimary: themeColors.white}}}
          visible={snackbarVisible}
          duration={Durations.SHORT}
          onDismiss={onDismissSnackBar}
          action={{
            label: snackLabel,
            onPress: () => {
              dispatch(toggleLanguage());
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
          <Button onPress={showModal}>
            <Text style={{color: themeColors.pitchblack}}>
              Latest Update Features
            </Text>
          </Button>
        </Provider>
        <Copyright />
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  BoldSmall: {
    marginLeft: 25,
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
