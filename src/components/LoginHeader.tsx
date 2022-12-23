import {StyleSheet, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import Logo from '../../assets/eurisko.jpg';

const LoginHeader = (): JSX.Element => {
  return (
    <>
      <Image style={styles.LogoCentered} source={Logo} />
      <Text style={styles.WelcomeMessage}>Welcome back!</Text>
    </>
  );
};

export default LoginHeader;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  LogoCentered: {
    width: width > 350 ? 80 : 60,
    height: height > 350 ? 94 : 60,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: 'black',
  },
  WelcomeMessage: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginVertical: 8,
  },
});
