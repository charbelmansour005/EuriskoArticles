import {FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {themeColors} from '../../helpers/themeColors';

const About = (): JSX.Element => {
  const data = [
    {key: 'react-native-toast-notifications'},
    {key: '@react-navigation/native-stack'},
    {key: '@react-navigation/bottom-tabs'},
    {key: 'react-native-screens'},
    {key: '@reduxjs/toolkit'},
    {key: 'react-native-paper'},
    {key: 'lottie-react-native'},
    {key: 'formik'},
    {key: 'yup'},
    {key: 'zod'},
  ];

  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <LottieView
          style={{width: '80%', aspectRatio: 1}}
          source={require('../../../assets/lottie/296-react-logo.json')}
          autoPlay={true}
          loop={true}
        />
      </View>
      <View>
        <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>
          This app was developed using React Native
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}></View>
      </View>
      <View style={styles.container}>
        {data?.map(item => (
          <Text
            style={{
              color: themeColors.skyblue,
              textAlign: 'center',
              marginVertical: 5,
              fontWeight: 'bold',
            }}
            key={Math.random()}>
            {item.key}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  rippleButton: {
    padding: 5,
    backgroundColor: themeColors.darkgray,
    borderRadius: 5,
    width: '30%',
    borderWidth: 1,
    borderColor: themeColors.darkgray,
  },
  rippleText: {
    textAlign: 'center',
    letterSpacing: 0,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    padding: 22,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: themeColors.transparentGray,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: themeColors.skyblue,
  },
});
