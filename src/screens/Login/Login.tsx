// react/native imports
import React, {useState} from 'react'
import {
  View,
  Alert,
  StyleSheet,
  Text,
  Pressable,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native'
import {TextInput} from 'react-native-paper'
// extra libraries
import {Formik} from 'formik'
import LottieView from 'lottie-react-native'
import {useToast} from 'react-native-toast-notifications'
// Keychain
import * as Keychain from 'react-native-keychain'
// reduxTK
import {storeCurrentUser} from '../../features/user/userSlice'
import {useAppDispatch} from '../../app/rtkHooks'
// helpers
import {themeColors} from '../../helpers/themeColors'
import {Durations} from '../../helpers/toasts'
import {
  LoginHeader,
  LoginGoogleButton,
  LoginBtnSeperator,
} from '../../components/index'
// yup validation schema
import {validationSchema} from '../../validations/loginValdation'
// services
import {loginUser} from '../../services/login'

const Login = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const submitHandler = (userlogin: {username: string; password: string}) => {
    setLoading(true)
    loginUser({userlogin})
      .then(async (response: any) => {
        const token = response?.accessToken
        const username = userlogin?.username
        await Keychain.setGenericPassword(username, token)
        dispatch(storeCurrentUser({accessToken: response?.accessToken}))
      })
      .catch(error => {
        setLoading(false)
        Alert.alert(
          'There was an issue',
          `${error.data.message}.`,
          [
            {
              text: 'Okay',
              style: 'default',
            },
          ],
          {cancelable: true},
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const toast = useToast()

  const SignInToast = (): void => {
    toast.show('Google Sign in is currently unavailable!', {
      type: 'normal',
      duration: Durations.MEDIUM,
      animationType: 'zoom-in',
      placement: 'bottom',
    })
  }

  const SignUpToast = (): void => {
    toast.show('Sign up is currently unavailable!', {
      type: 'normal',
      duration: Durations.MEDIUM,
      animationType: 'zoom-in',
      placement: 'bottom',
    })
  }

  return (
    <KeyboardAvoidingView style={styles.LoginMain} testID="parent">
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="#2C3E50"
      />
      <Formik
        validationSchema={validationSchema}
        initialValues={{username: '', password: ''}}
        onSubmit={(fields, actions) => {
          submitHandler(fields)
          // resets form after submit
          actions.resetForm()
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors,
          values,
        }) => (
          <View style={styles.LoginMain}>
            <View style={styles.loginHeader}>
              <LoginHeader />
            </View>
            <View>
              {errors.username && touched.username && (
                <Text style={{color: 'red', textAlign: 'center'}}>
                  {errors.username}
                </Text>
              )}
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TextInput
                testID="myUsername"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                mode="outlined"
                error={Boolean(errors.username && touched.username)}
                style={styles.UserInput}
                placeholder="Username"
                outlineColor="#23272A"
                placeholderTextColor="silver"
                textColor={themeColors.white}
                activeOutlineColor="silver"
                autoFocus={true}
              />
              <View>
                {errors.password && touched.password && (
                  <Text style={{color: 'red'}}>{errors.password}</Text>
                )}
              </View>
              <TextInput
                testID="myPassword"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                mode="outlined"
                error={Boolean(errors.password && touched.password)}
                style={styles.UserInputPass}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="silver"
                outlineColor="#23272A"
                textColor={themeColors.white}
                activeOutlineColor="silver"
              />
              <Text style={styles.ForgotPassword}> Forgot your password?</Text>
              <Pressable
                testID="myButton"
                disabled={Boolean(
                  !values.username ||
                    !values.password ||
                    errors.username ||
                    errors.password ||
                    loading,
                )}
                onPress={handleSubmit}
                android_disableSound={true}
                android_ripple={{
                  color: themeColors.lightgreen,
                  borderless: false,
                }}
                style={styles.TouchableBtnLogin}>
                <Text style={styles.TouchableTextLogin}>Log In</Text>
              </Pressable>
              {loading ? null : <LoginBtnSeperator />}
              {loading ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <LottieView
                    style={{width: '30%', aspectRatio: 1}}
                    source={require('../../../assets/lottie/131216-loading.json')}
                    autoPlay={true}
                    loop={true}
                  />
                </View>
              ) : (
                <LoginGoogleButton
                  SignInToast={SignInToast}
                  SignUpToast={SignUpToast}
                />
              )}
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  TouchableBtnLogin: {
    marginTop: 20,
    backgroundColor: '#5865F2',
    padding: 10,
    width: '92%',
    maxWidth: '92%',
    borderColor: '#5865F2',
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
  loginHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  UserInput: {
    width: '90%',
    maxWidth: '90%',
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 2,
    backgroundColor: '#23272A',
    borderColor: '#23272A',
    color: 'white',
  },
  UserInputPass: {
    width: '90%',
    maxWidth: '90%',
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
    marginVertical: 2,
    backgroundColor: '#23272A',
  },
  LoginMain: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#2C3E50',
    height: '100%',
    width: '100%',
    marginBottom: '50%',
  },
  ForgotPassword: {
    marginTop: 1,
    marginBottom: 1,
    color: themeColors.skyblue,
    marginRight: '55%',
    fontSize: 12,
  },
})
