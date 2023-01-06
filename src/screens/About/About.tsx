import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {themeColors} from '../../helpers/themeColors'
import LottieView from 'lottie-react-native'
import {Copyright} from '../../components'

const About = (): JSX.Element => {
  return (
    <LinearGradient
      style={{width: '100%', height: '100%'}}
      colors={[
        '#2C3E50',
        themeColors.white,
        themeColors.white,
        themeColors.white,
        '#2C3E50',
      ]}>
      <ScrollView>
        <StatusBar
          translucent={false}
          barStyle="light-content"
          backgroundColor="#2C3E50"
        />
        <View style={{height: '100%', width: '100%'}} testID="parent">
          <View style={styles.animationContainer} testID="animationContainer">
            <LottieView
              testID="lottieAnimation"
              style={{width: '80%', aspectRatio: 1}}
              source={require('../../../assets/lottie/296-react-logo.json')}
              autoPlay={true}
              loop={true}
            />
          </View>
          <View testID="titleContainer">
            <Text testID="aboutTitle" style={styles.title}>
              This app was developed using React Native
            </Text>
          </View>
          <Copyright />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LottieView
              testID="lottieAnimation"
              style={{width: '80%', aspectRatio: 1}}
              source={require('../../../assets/lottie/86101-flying-hearts.json')}
              autoPlay={true}
              loop={true}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
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
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  animationContainer: {justifyContent: 'center', alignItems: 'center'},
})
