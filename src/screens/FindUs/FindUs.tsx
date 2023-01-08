import {StyleSheet, StatusBar, View, Image, Linking} from 'react-native'
import Insta from '../../../assets/insta.png'
import Twitter from '../../../assets/twitter.png'
import FB from '../../../assets/facebook.png'
import {Pressable} from 'react-native'
import React from 'react'
import {themeColors} from '../../helpers/themeColors'

type Props = {}

const FindUs = (props: Props) => {
  return (
    <View style={styles.main}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="silver"
      />
      <Pressable
        onPress={() =>
          Linking.openURL('https://www.instagram.com/nytimes/?hl=en')
        }>
        <Image
          source={Insta}
          style={{
            height: 70,
            width: 70,
            marginBottom: 30,
          }}
        />
      </Pressable>
      <Pressable
        onPress={() =>
          Linking.openURL(
            'https://twitter.com/nytimes?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
          )
        }>
        <Image
          source={Twitter}
          style={{
            height: 70,
            width: 70,
            borderRadius: 10,
            marginBottom: 30,
          }}
        />
      </Pressable>
      <Pressable
        onPress={() => Linking.openURL('https://www.facebook.com/nytimes/')}>
        <Image
          source={FB}
          style={{
            height: 70,
            width: 70,
            borderRadius: 10,
          }}
        />
      </Pressable>
    </View>
  )
}

export default FindUs

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
})
