import GoogleLogo from '../../assets/google.png';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {themeColors} from '../helpers/themeColors';
import React from 'react';

const LoginGoogleButton = (): JSX.Element => {
  return (
    <>
      <Pressable
        android_disableSound={true}
        android_ripple={{color: themeColors.salmon, borderless: false}}
        style={styles.GoogleBtn}>
        <View style={styles.rowflex}>
          <Image source={GoogleLogo} style={{width: 30, height: 30}} />
          <Text style={styles.GoogleText}>Sign in with Google</Text>
        </View>
      </Pressable>
      <View style={{marginTop: 20, ...styles.rowflex}}>
        <Text style={{color: '#131938'}}> Don't have an account?</Text>
        <Text style={{color: '#131938', fontWeight: 'bold'}}>{` Sign up`}</Text>
      </View>
    </>
  );
};

export default LoginGoogleButton;

const styles = StyleSheet.create({
  GoogleBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: themeColors.grey,
    padding: 8,
    width: 'auto',
    maxWidth: '100%',
    marginTop: 25,
    borderRadius: 5,
  },
  rowflex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  GoogleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 1,
    marginLeft: 14,
  },
});
