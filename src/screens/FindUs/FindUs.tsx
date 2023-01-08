import {StyleSheet, Text, View, Image, Linking} from 'react-native'
import Insta from '../../../assets/insta.png'
import Twitter from '../../../assets/twitter.png'
import FB from '../../../assets/facebook.png'
import {Pressable} from 'react-native'
import React from 'react'

type Props = {}

const FindUs = (props: Props) => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() =>
          Linking.openURL('https://www.instagram.com/nytimes/?hl=en')
        }>
        <Image
          source={Insta}
          style={{
            height: 50,
            width: 50,
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
            height: 50,
            width: 50,
            borderRadius: 10,
            marginVertical: 10,
          }}
        />
      </Pressable>
      <Pressable
        onPress={() => Linking.openURL('https://www.facebook.com/nytimes/')}>
        <Image
          source={FB}
          style={{
            height: 50,
            width: 50,
            borderRadius: 10,
            marginVertical: 0,
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
