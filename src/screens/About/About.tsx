import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

type Props = {};

const About = (props: Props): JSX.Element => {
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
        <Text>This app was created with react native</Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
