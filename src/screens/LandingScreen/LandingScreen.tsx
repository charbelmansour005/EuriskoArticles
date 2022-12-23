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
import Logo from '../../../assets/eurisko.jpg';
import {themeColors} from '../../helpers/themeColors';

const LandingScreen = ({navigation}: any): JSX.Element => {
  return (
    <KeyboardAvoidingView style={styles.LandingMain}>
      <View style={styles.LoginContainer}>
        <Image style={styles.LogoCentered} source={Logo} />
        <Text>Providing you the latest news</Text>
        <Text style={{color: themeColors.pitchblack, textAlign: 'center'}}>
          Let's start
        </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.TouchableTextLogin}>LOGIN</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text>SIGN UP</Text>
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
  TouchableTextLogin: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 1,
  },
});
