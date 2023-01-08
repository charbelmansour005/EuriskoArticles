// react/native imports
import React from 'react'
import {
  Dimensions,
  Pressable,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native'
import {Text} from 'react-native-paper'
// helpers
import {Durations} from '../../helpers/toasts'
import {themeColors} from '../../helpers/themeColors'
// extra libraries
import LottieView from 'lottie-react-native'
import {useToast} from 'react-native-toast-notifications'

const LandingScreen = ({navigation}: any): JSX.Element => {
  const toast = useToast()
  const signUpToast = (): void => {
    toast.show('Our servers are currently full!', {
      type: 'normal',
      duration: Durations.MEDIUM,
      animationType: 'slide-in',
      placement: 'center',
    })
  }

  return (
    <KeyboardAvoidingView style={styles.LandingMain} testID="parent">
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="#2C3E50"
      />
      <View style={styles.LoginContainer} testID="loginContainer">
        <View
          style={{justifyContent: 'center', alignItems: 'center'}}
          testID="animationContainer">
          <LottieView
            style={{width: '80%', aspectRatio: 1}}
            source={require('../../../assets/lottie/99357-news.json')}
            autoPlay={true}
            loop={true}
            testID="animation"
          />
        </View>
        <Text style={styles.WelcomeMessage} testID="mainTitle">
          Providing the latest news
        </Text>
        <Text
          testID="title"
          style={{
            color: themeColors.white,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Let's start
        </Text>

        <Pressable
          testID="loginNav"
          onPress={() => navigation.navigate('Login')}
          android_disableSound={true}
          android_ripple={{
            color: themeColors.white,
            borderless: false,
          }}
          style={styles.TouchableBtnLogin}>
          <Text style={styles.TouchableTextLogin} testID="loginText">
            Log In
          </Text>
        </Pressable>
        <Pressable
          testID="signUpBtn"
          onPress={() => signUpToast()}
          android_disableSound={true}
          android_ripple={{color: themeColors.white, borderless: false}}
          style={styles.TouchableBtnSignUp}>
          <Text style={styles.TouchableTextSignUp} testID="signUpText">
            Register
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LandingScreen

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  LandingMain: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#2C3E50',
    height: '100%',
    width: '100%',
  },
  WelcomeMessage: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  LogoCentered: {
    width: width > 350 ? 80 : 60,
    height: height > 350 ? 94 : 60,
    borderRadius: 2,
    borderWidth: 4,
    borderColor: 'black',
  },
  LoginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    marginTop: '10%',
  },
  TouchableBtnSignUp: {
    marginTop: 8,
    backgroundColor: '#5865F2',
    padding: 10,
    width: '92%',
    maxWidth: '92%',
    borderRadius: 3,
  },
  TouchableTextSignUp: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 1,
  },
  TouchableBtnLogin: {
    marginTop: '50%',
    backgroundColor: themeColors.darkgray,
    padding: 10,
    width: '92%',
    maxWidth: '92%',
    borderColor: themeColors.darkgray,
    borderWidth: 1,
    borderRadius: 3,
  },
  TouchableTextLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 1,
  },
})
