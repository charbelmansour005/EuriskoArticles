import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Image} from 'react-native';
import {themeColors} from '../helpers/themeColors';
import React from 'react';
import {Dashboard, Settings} from '../screens/index';

const Tab = createBottomTabNavigator();

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
                source={require('../../assets/ny.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused
                    ? themeColors.pitchblack
                    : themeColors.grey,
                  ...styles.tabbarImgNY,
                }}
              />
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
                  tintColor: focused
                    ? themeColors.pitchblack
                    : themeColors.grey,
                  ...styles.tabbarImg,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
  },
  tabbarImgNY: {
    width: 20,
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
    bottom: 20,
    left: 25,
    right: 25,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: 50,
    // allowing some article text to be shown
    opacity: 0.8,
  },
});
