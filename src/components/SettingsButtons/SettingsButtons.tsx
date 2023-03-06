import {View, Text, StyleSheet, Pressable} from 'react-native'
import {TouchableRipple} from 'react-native-paper'
import {themeColors} from '../../helpers/themeColors'
import React from 'react'
import {SettingsButtonsProps} from './types'

const SettingsButtons = ({...props}: SettingsButtonsProps): JSX.Element => {
  return (
    <View style={styles.settingsBtns} testID="parent">
      <Pressable
        testID="logoutButton"
        style={styles.rippleButtonLogout}
        onPress={props?.askLogout}
        android_ripple={{
          color: themeColors.lightgray,
          borderless: false,
          foreground: false,
        }}>
        <Text style={styles.rippleText} testID="logoutText">
          {props?.language?.english ? `Logout` : `Déconnecter`}
        </Text>
      </Pressable>
      <Pressable
        testID="aboutButton"
        style={styles.rippleButton}
        onPress={() => props?.navigate('About')}
        android_ripple={{
          color: themeColors.lightgray,
          borderless: false,
          foreground: false,
        }}>
        <Text style={styles.rippleText} testID="aboutButtonText">
          {props?.language?.english ? `About` : `Technologie`}
        </Text>
      </Pressable>
    </View>
  )
}

export default SettingsButtons

const styles = StyleSheet.create({
  settingsBtns: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    flexDirection: 'row',
  },
  rippleButton: {
    padding: 8,
    backgroundColor: themeColors.pitchblack,
    borderRadius: 3,
    width: '45%',
    borderWidth: 1,
    borderColor: themeColors.pitchblack,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 1,
  },
  rippleButtonLogout: {
    padding: 8,
    backgroundColor: themeColors.pitchblack,
    borderRadius: 3,
    width: '45%',
    borderWidth: 1,
    borderColor: themeColors.pitchblack,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 1,
  },
  rippleText: {
    textAlign: 'center',
    letterSpacing: 1,
    color: themeColors.white,
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
})
