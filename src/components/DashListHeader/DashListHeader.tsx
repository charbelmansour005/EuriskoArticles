import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Button,
  Linking,
} from 'react-native'
import {themeColors} from '../../helpers/themeColors'
import Modal from 'react-native-modal'
import React from 'react'

type Props = {}

const DashListHeader = (props: Props) => {
  const US_States = [
    'Arkansas',
    'Alaska',
    'California',
    'Florida',
    'Idaho',
    'Indiana',
    'Kansas',
    'Maine',
    'Michigan',
    'Minnsota',
    'Montana',
    'New York',
    'North Carolina',
  ]
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  return (
    <View style={styles.listHeaderParent}>
      <Image
        source={require('../../../assets/newspaper.jpg')}
        style={styles.listHeaderImage}
      />
      <Modal
        isVisible={isVisible}
        backdropColor="white"
        swipeDirection={['down', 'right', 'left']}
        backdropOpacity={0.8}
        onSwipeComplete={() => setIsVisible(false)}>
        <View style={{flex: 1}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Pressable
              onPress={() => setIsVisible(false)}
              style={styles.listHeaderPressable3}>
              <Text style={styles.listHeaderPressableText}>Close</Text>
            </Pressable>
            <View
              style={{
                backgroundColor: 'black',
                padding: 20,
                marginTop: 20,
              }}>
              {US_States.map(city => {
                return (
                  <Text
                    key={Math.random()}
                    style={{marginTop: 10, ...styles.listHeaderPressableText4}}>
                    {city}
                  </Text>
                )
              })}
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.listHeaderView}>
        <Pressable
          onPress={() => setIsVisible(true)}
          style={{
            backgroundColor: themeColors.skyblue,
            ...styles.listHeaderPressable1,
          }}
          android_ripple={{
            color: 'white',
          }}>
          <Text style={styles.listHeaderPressableText}>Stations</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: themeColors.skyblue,
            ...styles.listHeaderPressable1,
          }}
          android_ripple={{color: 'white'}}>
          <Text style={styles.listHeaderPressableText}>Soon</Text>
        </Pressable>
        <Pressable
          onPress={() => Linking.openURL('mailto:customerservice@nypost.com')}
          style={{
            backgroundColor: themeColors.skyblue,
            ...styles.listHeaderPressable1,
          }}
          android_ripple={{
            color: 'white',
          }}>
          <Text style={styles.listHeaderPressableText}>Support</Text>
        </Pressable>
        <Pressable
          onPress={() => Linking.openURL('https://nypost.com')}
          style={{
            backgroundColor: themeColors.skyblue,
            ...styles.listHeaderPressable1,
          }}
          android_ripple={{color: 'white'}}>
          <Text style={styles.listHeaderPressableText}>Website</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default DashListHeader

const styles = StyleSheet.create({
  listHeaderParent: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    // paddingVertical: '30%',
  },
  listHeaderImage: {
    height: 280,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listHeaderView: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listHeaderPressable1: {
    height: 30,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeaderPressableText: {
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '300',
    letterSpacing: 1,
  },
  listHeaderPressableText4: {
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  listHeaderPressable3: {
    height: 30,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 2,
  },
})
