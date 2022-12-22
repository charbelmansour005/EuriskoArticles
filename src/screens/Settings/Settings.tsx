import {StyleSheet, Text, View} from 'react-native';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeCurrentUser} from '../../features/user/userSlice';
import {useAppDispatch} from '../../app/rtkHooks';
import {Button} from 'react-native';
import React from 'react';

type Props = {};

const Settings = (props: Props) => {
  const dispatch = useAppDispatch();
  const logoutHandler = async (): Promise<void> => {
    await AsyncStorage.clear();
    dispatch(storeCurrentUser({accessToken: null}));
  };
  const askLogout = (): void =>
    Alert.alert(
      'warning',
      'ur about to logout',
      [
        {
          // no => passed : recieve cancel behavior
          text: 'Cancel',
          style: 'cancel',
        },
        {
          // logout
          text: 'Logout',
          onPress: (): void => {
            logoutHandler();
          },
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  return (
    <View>
      <Button onPress={askLogout} title="Logout"/>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
