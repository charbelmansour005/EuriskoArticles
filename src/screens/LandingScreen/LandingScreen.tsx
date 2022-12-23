import React from 'react';
import {
  Dimensions,
  Pressable,
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {Text} from 'react-native-paper';
import {themeColors} from '../../helpers/themeColors';
import LottieView from 'lottie-react-native';

const LandingScreen = ({navigation}: any): JSX.Element => {
  return (
    <KeyboardAvoidingView style={styles.LandingMain}>
      <View style={styles.LoginContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            style={{width: '80%', aspectRatio: 1}}
            source={require('../../../assets/lottie/129574-ginger-bread-socks-christmas.json')}
            autoPlay={true}
            loop={true}
          />
        </View>

        <Text style={styles.WelcomeMessage}>Providing you the latest news</Text>
        <Text style={{color: themeColors.pitchblack, textAlign: 'center'}}>
          Let's start
        </Text>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          android_disableSound={true}
          android_ripple={{
            color: themeColors.red,
            borderless: false,
          }}
          style={styles.TouchableBtnLogin}>
          <Text style={styles.TouchableTextLogin}>LOGIN</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          android_disableSound={true}
          android_ripple={{color: themeColors.lightskyblue, borderless: false}}
          style={styles.TouchableBtnSignUp}>
          <Text style={styles.TouchableTextSignUp}>SIGN UP</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LandingScreen;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  LandingMain: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  WelcomeMessage: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
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
    marginBottom: '30%',
  },
  TouchableBtnSignUp: {
    marginTop: 15,
    backgroundColor: 'black',
    padding: 13,
    width: '80%',
    maxWidth: '80%',
    borderRadius: 5,
  },
  TouchableTextSignUp: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 1,
  },
  TouchableBtnLogin: {
    marginTop: 20,
    backgroundColor: 'transparent',
    padding: 13,
    width: '80%',
    maxWidth: '80%',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
  },
  TouchableTextLogin: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 1,
  },
});
