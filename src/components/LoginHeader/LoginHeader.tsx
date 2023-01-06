import {StyleSheet, Image, Dimensions, Text} from 'react-native'
import React from 'react'
import Logo from '../../../assets/eurisko.jpg'

const LoginHeader = (): JSX.Element => {
  return (
    <>
      {/* <Image testID="image" style={styles.LogoCentered} source={Logo} /> */}
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          marginBottom: 5,
          fontSize: 23,
        }}>
        Welcome back!
      </Text>
      <Text style={{color: '#7F8C8D', marginBottom: 20, fontWeight: 'bold'}}>
        We're so excited to see you again!
      </Text>
    </>
  )
}

export default LoginHeader

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  LogoCentered: {
    width: width > 350 ? 90 : 70,
    height: height > 350 ? 104 : 70,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: 'black',
    marginBottom: '10%',
  },
})
