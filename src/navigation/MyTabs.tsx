import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {StyleSheet, Image, Text, Pressable} from 'react-native'
import {themeColors} from '../helpers/themeColors'
import React, {useState} from 'react'
import {Dashboard, Settings, More, FindUs} from '../screens/index'
import {useNavigation} from '@react-navigation/native'

const Tab = createBottomTabNavigator()
type Nav = {
  navigate: (value: string) => void
}

export const MyTabs = (): JSX.Element => {
  const {navigate} = useNavigation<Nav>()
  // hacky way - since focused prop isn't available for tabBarButton
  const [dashColor, setDashColor] = useState<string>(themeColors.darkblue)
  const [settingsColor, setSettingsColor] = useState<string>('gray')
  const [moreColor, setMoreColor] = useState<string>('gray')
  const [findColor, setFindColor] = useState<string>('gray')
  const navigateDashboard = (): void => {
    navigate('Dashboard')
    setDashColor(themeColors.darkblue)
    setSettingsColor('gray')
    setMoreColor('gray')
    setFindColor('gray')
  }
  const navigateSettings = (): void => {
    navigate('Settings')
    setSettingsColor(themeColors.darkblue)
    setDashColor('gray')
    setMoreColor('gray')
    setFindColor('gray')
  }
  const navigateMore = (): void => {
    navigate('More')
    setMoreColor(themeColors.darkblue)
    setDashColor('gray')
    setSettingsColor('gray')
    setFindColor('gray')
  }
  const navigateFind = (): void => {
    navigate('FindUs')
    setFindColor(themeColors.darkblue)
    setDashColor('gray')
    setSettingsColor('gray')
    setMoreColor('gray')
  }
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
          tabBarAccessibilityLabel: 'Feed',
          tabBarLabel: 'Feed',
          tabBarBadge: 'Feed',
          tabBarInactiveBackgroundColor: 'gray',
          tabBarButton: () => (
            <Pressable
              onPress={navigateDashboard}
              android_ripple={{
                color: themeColors.lightgray,
                borderless: true,
                radius: 50,
                foreground: true,
              }}
              android_disableSound={false}
              style={{
                width: '25%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}>
              <Image
                source={require('../../assets/house.png')}
                resizeMode="contain"
                style={{
                  tintColor: dashColor,
                  ...styles.tabbarImg,
                }}
              />
              <Text
                style={{
                  color: dashColor,
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: '300',
                }}>
                Feed
              </Text>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarButton: () => (
            <Pressable
              onPress={navigateSettings}
              android_ripple={{
                color: themeColors.lightgray,
                borderless: true,
                radius: 50,
                foreground: true,
              }}
              style={{
                width: '25%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}>
              <Image
                source={require('../../assets/settings.png')}
                resizeMode="contain"
                style={{
                  tintColor: settingsColor,
                  ...styles.tabbarImg,
                }}
              />
              <Text
                style={{
                  color: settingsColor,
                  textAlign: 'center',
                  fontWeight: '300',
                  fontSize: 14,
                }}>
                Settings
              </Text>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarButton: () => (
            <Pressable
              onPress={navigateMore}
              android_ripple={{
                color: themeColors.lightgray,
                borderless: true,
                radius: 50,
                foreground: true,
              }}
              android_disableSound={false}
              style={{
                width: '25%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}>
              <Image
                source={require('../../assets/more.png')}
                resizeMode="contain"
                style={{
                  tintColor: moreColor,
                  ...styles.tabbarImg,
                }}
              />
              <Text
                style={{
                  color: moreColor,
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '300',
                  fontSize: 14,
                }}>
                More
              </Text>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="FindUs"
        component={FindUs}
        options={{
          tabBarButton: () => (
            <Pressable
              onPress={navigateFind}
              android_ripple={{
                color: themeColors.lightgray,
                borderless: true,
                radius: 50,
                foreground: true,
              }}
              style={{
                width: '25%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
              }}>
              <Image
                source={require('../../assets/find.png')}
                resizeMode="contain"
                style={{
                  tintColor: findColor,
                  ...styles.tabbarImg,
                }}
              />
              <Text
                style={{
                  color: findColor,
                  textAlign: 'center',
                  fontWeight: '300',
                  fontSize: 14,
                }}>
                Find Us
              </Text>
            </Pressable>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 24,
  },
  tabbarImg: {
    width: 20,
    height: 20,
    opacity: 1,
    top: 0,
  },
  tabbarView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  tabbarViewButton: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    height: '100%',
    width: '100%',
  },
  tabbarMain: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 20,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 1,
    borderTopLeftRadius: 1,
    height: 60,
    // allowing some article text to be shown
    opacity: 1,
  },
})
