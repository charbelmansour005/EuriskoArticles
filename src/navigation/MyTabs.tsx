import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, StyleSheet, Image, Text} from 'react-native'
import {themeColors} from '../helpers/themeColors'
import React from 'react'
import {Dashboard, Settings, More} from '../screens/index'

const Tab = createBottomTabNavigator()

export const MyTabs = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabbarMain,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabbarView}>
              <Image
                source={require('../../assets/house.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? 'transparent' : 'silver',
                  ...styles.tabbarImg,
                }}
              />
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{
                    color: focused ? themeColors.pitchblack : 'transparent',
                    fontWeight: 'bold',
                    fontSize: 12,
                    bottom: 13,
                  }}>
                  Home
                </Text>
                <Image
                  source={require('../../assets/dot.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? 'black' : 'transparent',
                    height: 5,
                    width: 5,
                    bottom: 5,
                    alignSelf: 'center',
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabbarView}>
              <Image
                source={require('../../assets/settings.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? 'transparent' : 'silver',
                  ...styles.tabbarImg,
                }}
              />
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{
                    color: focused ? themeColors.pitchblack : 'transparent',
                    fontWeight: 'bold',
                    fontSize: 12,
                    bottom: 13,
                  }}>
                  Settings
                </Text>
                <Image
                  source={require('../../assets/dot.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? 'black' : 'transparent',
                    height: 5,
                    width: 5,
                    bottom: 5,
                    alignSelf: 'center',
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabbarView}>
              <Image
                source={require('../../assets/more.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? 'transparent' : 'silver',
                  ...styles.tabbarImg,
                }}
              />
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{
                    color: focused ? themeColors.pitchblack : 'transparent',
                    fontWeight: 'bold',
                    fontSize: 12,
                    bottom: 13,
                  }}>
                  More
                </Text>
                <Image
                  source={require('../../assets/dot.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? 'black' : 'transparent',
                    height: 5,
                    width: 5,
                    bottom: 5,
                    alignSelf: 'center',
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabbarImg: {
    width: 25,
    height: 25,
    opacity: 1,
    top: 10,
  },
  tabbarImgFocused: {
    width: 25,
    height: 25,
    opacity: 1,
    top: 0,
  },
  tabbarImgNY: {
    width: 22,
    height: 22,
    opacity: 1,
  },
  tabbarView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  tabbarMain: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 50,
    // allowing some article text to be shown
    opacity: 0.9,
  },
})
