import GoogleLogo from '../../../assets/google.png'
import {StyleSheet, Text, View, Image, Pressable} from 'react-native'
import {themeColors} from '../../helpers/themeColors'
import React from 'react'
// import {useAppSelector} from '../../app/rtkHooks'
import {Fragment} from 'react'

interface Props {
  SignInToast: () => void
  SignUpToast: () => void
}

const LoginGoogleButton = ({...props}: Props) => {
  // const language = useAppSelector(state => state.language)
  return (
    <Fragment>
      <Pressable
        onPress={props.SignInToast}
        testID="googlePressable"
        android_disableSound={true}
        android_ripple={{color: themeColors.white, borderless: false}}
        style={styles.GoogleBtn}>
        <View style={styles.rowflex} testID="btnContainer">
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
      <View style={{marginTop: 20, ...styles.rowflex}} testID="signUpContainer">
        <Text style={{color: 'white'}} testID="googleNoAcc">
          Don't have an account?
        </Text>
        <Text
          onPress={props.SignUpToast}
          style={{color: themeColors.skyblue, fontWeight: 'bold'}}
          testID="googleSignUp">
          {' '}
          Sign up
        </Text>
      </View>
    </Fragment>
  )
}

export default LoginGoogleButton

const styles = StyleSheet.create({
  GoogleBtn: {
    backgroundColor: '#5865F2',
    borderWidth: 1,
    borderColor: '#5865F2',
    padding: 5,
    width: '92%',
    maxWidth: '100%',
    marginTop: 25,
    borderRadius: 3,
    alignItems: 'center',
  },
  rowflex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  GoogleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    letterSpacing: 1,
    marginLeft: 14,
  },
})
