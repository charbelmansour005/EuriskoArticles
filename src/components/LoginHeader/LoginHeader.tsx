import {StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import Logo from '../../../assets/eurisko.jpg';

const LoginHeader = (): JSX.Element => {
  return <Image style={styles.LogoCentered} source={Logo} />;
};

export default LoginHeader;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  LogoCentered: {
    width: width > 350 ? 90 : 70,
    height: height > 350 ? 104 : 70,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: 'black',
    marginBottom: '10%',
  },
});
