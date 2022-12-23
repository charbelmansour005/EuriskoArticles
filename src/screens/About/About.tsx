import {FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {themeColors} from '../../helpers/themeColors';
import LinearGradient from 'react-native-linear-gradient';

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
    <LinearGradient
      colors={['white', 'skyblue', 'skyblue', 'white', 'white']}
      style={{height: '100%', width: '100%'}}>
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
    </LinearGradient>
  );
};

export default About;

const styles = StyleSheet.create({
  rippleText: {
    textAlign: 'center',
    letterSpacing: 0,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    padding: 22,
    borderColor: 'transparent',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  item: {
    color: themeColors.darkgray,
    textAlign: 'center',
    marginVertical: 5,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
  animationContainer: {justifyContent: 'center', alignItems: 'center'},
});
