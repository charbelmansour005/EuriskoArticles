import {StyleSheet, Text, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import React from 'react';
import LottieView from 'lottie-react-native';
import {themeColors} from '../../helpers/themeColors';

type Props = {};

const About = ({navigation}: any): JSX.Element => {
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
});
