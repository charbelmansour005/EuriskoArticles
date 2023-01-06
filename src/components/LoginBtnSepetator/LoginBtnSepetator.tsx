import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const LoginBtnSeperator = (): JSX.Element => {
  return (
    <View style={styles.rowflex} testID="parent">
      <View style={styles.lineDesign} testID="line1" />
      <View testID="orTextContainer">
        <Text testID="orText" style={styles.middleText}>
          Or
        </Text>
      </View>
      <View style={styles.lineDesign} testID="line2" />
    </View>
  )
}

export default LoginBtnSeperator

const styles = StyleSheet.create({
  rowflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  lineDesign: {height: 2, backgroundColor: 'white', width: '20%'},
  middleText: {
    width: 50,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})
