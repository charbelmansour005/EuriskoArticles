import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const About = (): JSX.Element => {
  return (
    <View style={{height: '100%', width: '100%'}} testID="parent">
      <View style={styles.animationContainer}>
        <LottieView
          testID="lottieAnimation"
          style={{width: '80%', aspectRatio: 1}}
          source={require('../../../assets/lottie/296-react-logo.json')}
          autoPlay={true}
          loop={true}
        />
      </View>
      <View>
        <Text testID="aboutTitle" style={styles.title}>
          This app was developed using React Native
        </Text>
      </View>
    </View>
  )
}

export default About

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
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
  animationContainer: {justifyContent: 'center', alignItems: 'center'},
})
