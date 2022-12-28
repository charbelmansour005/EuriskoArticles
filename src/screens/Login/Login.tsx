import React, {useState} from 'react'
import {
  View,
  Alert,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native'
import {TextInput} from 'react-native-paper'
import {Formik} from 'formik'
import * as yup from 'yup'
import {loginUser} from '../../services/login'
import {useAppDispatch} from '../../app/rtkHooks'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {storeCurrentUser} from '../../features/user/userSlice'
import {themeColors} from '../../helpers/themeColors'
import LottieView from 'lottie-react-native'
// import {useAppSelector} from '../../app/rtkHooks'
import {
  LoginHeader,
  LoginGoogleButton,
  LoginBtnSeperator,
} from '../../components/index'

const Login = (): JSX.Element => {
  // const language = useAppSelector(state => state?.language)
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  var usernameRules = new RegExp('^\\w[\\w.]{2,18}\\w$')

  const validationShema = yup.object({
    username: yup
      .string()
      .matches(usernameRules, {message: 'Invalid Format'})
      .required('Required'),
    password: yup.string().min(5).required('Required'),
  })

  const submitHandler = (userlogin: {username: string; password: string}) => {
    setLoading(true)
    loginUser({userlogin})
      .then(async (response: any) => {
        await AsyncStorage.setItem('@accessToken', response.accessToken)
        dispatch(storeCurrentUser({accessToken: response.accessToken}))
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

  return (
    <KeyboardAvoidingView style={styles.LoginMain}>
      <Formik
        validationSchema={validationShema}
        initialValues={{username: '', password: ''}}
        onSubmit={(fields, actions) => {
          submitHandler(fields)
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
                <Text style={{color: 'black', textAlign: 'center'}}>
                  {errors.username}
                </Text>
              )}
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TextInput
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                mode="outlined"
                error={Boolean(errors.username && touched.username)}
                style={styles.UserInput}
                placeholder="Username"
                outlineColor={themeColors.lightgray}
                activeOutlineColor={themeColors.lightgreen}
              />
              <View>
                {errors.password && touched.password && (
                  <Text style={{color: 'black'}}>{errors.password}</Text>
                )}
              </View>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                mode="outlined"
                error={Boolean(errors.password && touched.password)}
                style={styles.UserInputPass}
                secureTextEntry={true}
                placeholder="Password"
                outlineColor={themeColors.lightgray}
                activeOutlineColor={themeColors.lightgreen}
              />
              <Text style={styles.ForgotPassword}> Forgot your password?</Text>
              <Pressable
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
                <Text style={styles.TouchableTextLogin}>SUBMIT</Text>
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
                <LoginGoogleButton />
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
    marginVertical: 5,
  },
  UserInputPass: {
    width: '90%',
    maxWidth: '90%',
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
    marginVertical: 5,
  },
  LoginMain: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  ForgotPassword: {
    marginTop: 7,
    marginBottom: 20,
    color: '#000066',
    marginLeft: '49%',
    fontSize: 12,
  },
})
