import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Linking,
  Dimensions,
} from 'react-native'
import MapView from 'react-native-maps'
import Insta from '../../../assets/insta.png'
import Twitter from '../../../assets/twitter.png'
import FB from '../../../assets/facebook.png'
import {Pressable} from 'react-native'
import React from 'react'
import {themeColors} from '../../helpers/themeColors'

type Props = {}

const FindUs = (props: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="white"
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
      </Pressable> */}
      <MapView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        provider="google"
      />
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
