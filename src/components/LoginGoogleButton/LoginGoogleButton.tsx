import GoogleLogo from '../../../assets/google.png'
import {StyleSheet, Text, View, Image, Pressable} from 'react-native'
import {themeColors} from '../../helpers/themeColors'
import React from 'react'
// import {useAppSelector} from '../../app/rtkHooks'
import {Fragment} from 'react'

const LoginGoogleButton = () => {
  // const language = useAppSelector(state => state.language)
  return (
    <Fragment>
      <Pressable
        testID="googlePressable"
        android_disableSound={true}
        android_ripple={{color: themeColors.salmon, borderless: false}}
        style={styles.GoogleBtn}>
        <View style={styles.rowflex}>
          <Image
            source={GoogleLogo}
            style={{width: 30, height: 30}}
            testID="googleImage"
          />
          <Text style={styles.GoogleText} testID="googleText">
            Sign in with Google
          </Text>
        </View>
      </Pressable>
      <View style={{marginTop: 20, ...styles.rowflex}}>
        <Text style={{color: '#131938'}} testID="googleNoAcc">
          Don't have an account?
        </Text>
        <Text
          style={{color: '#131938', fontWeight: 'bold'}}
          testID="googleSignUp">
          Sign up
        </Text>
      </View>
    </Fragment>
  )
}

export default LoginGoogleButton

const styles = StyleSheet.create({
  GoogleBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'lightgray',
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
})
