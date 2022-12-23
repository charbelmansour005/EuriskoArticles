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
    {key: '...'},
  ];

  return (
    <View>
      <View style={styles.animationContainer}>
        <LottieView
          style={{width: '80%', aspectRatio: 1}}
          source={require('../../../assets/lottie/296-react-logo.json')}
          autoPlay={true}
          loop={true}
        />
      </View>
      <View>
        <Text style={styles.title}>
          This app was developed using React Native
        </Text>
      </View>
      <View style={styles.container}>
        {data?.map(item => (
          <Text style={styles.item} key={Math.random()}>
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
    color: themeColors.skyblue,
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
  animationContainer: {justifyContent: 'center', alignItems: 'center'},
});
