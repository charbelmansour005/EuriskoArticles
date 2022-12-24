import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {themeColors} from '../../helpers/themeColors';
import LinearGradient from 'react-native-linear-gradient';

const About = (): JSX.Element => {
  return (
    <LinearGradient
      colors={['skyblue', 'white', 'skyblue', 'skyblue', 'white', 'white']}
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
  title: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  animationContainer: {justifyContent: 'center', alignItems: 'center'},
});
