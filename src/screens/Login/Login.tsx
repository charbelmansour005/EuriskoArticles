import React, {useState} from 'react';
import {
  Button,
  View,
  Alert,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import LoginHeader from '../../components/LoginHeader';
import * as yup from 'yup';
import {loginUser} from '../../services/login';
import {useAppDispatch} from '../../app/rtkHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeCurrentUser} from '../../features/user/userSlice';
import LoadingSpinner from '../../components/LoadingSpinner';
import LoginGoogleButton from '../../components/LoginGoogleButton';
import LoginBtnSeperator from '../../components/LoginBtnSepetator';

const Login = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  var usernameRules = new RegExp('^\\w[\\w.]{2,18}\\w$');

  const validationShema = yup.object({
    username: yup
      .string()
      .matches(usernameRules, {message: 'Invalid Format'})
      .required('Required'),
    password: yup.string().min(5).required('Required'),
  });

  const submitHandler = (userlogin: {username: string; password: string}) => {
    setLoading(true);
    loginUser({userlogin})
      .then(async (response: any) => {
        await AsyncStorage.setItem('@accessToken', response.accessToken);
        dispatch(storeCurrentUser({accessToken: response.accessToken}));
      })
      .catch(error => {
        setLoading(false);
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
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.LoginMain}>
      <Formik
        validationSchema={validationShema}
        initialValues={{username: '', password: ''}}
        onSubmit={(fields, actions) => {
          submitHandler(fields);
          actions.resetForm();
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
              />
              <Button
                onPress={handleSubmit}
                title="Submit"
                disabled={Boolean(
                  !values.username ||
                    !values.password ||
                    errors.username ||
                    errors.password ||
                    loading,
                )}
              />
              <LoginBtnSeperator />
              <LoginGoogleButton />
            </View>
          </View>
        )}
      </Formik>
      {loading && <LoadingSpinner />}
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
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
});
