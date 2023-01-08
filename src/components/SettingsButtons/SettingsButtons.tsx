import {View, Text, StyleSheet} from 'react-native'
import {TouchableRipple} from 'react-native-paper'
import {themeColors} from '../../helpers/themeColors'
import React from 'react'
import {SettingsButtonsProps} from './types'

const SettingsButtons = ({...props}: SettingsButtonsProps): JSX.Element => {
  return (
    <View style={styles.settingsBtns} testID="parent">
      <TouchableRipple
        testID="logoutButton"
        style={styles.rippleButtonLogout}
        onPress={props?.askLogout}
        rippleColor={props?.chosenRippleColor}>
        <Text style={styles.rippleText} testID="logoutText">
          {props?.language?.english ? `Logout` : `Déconnecter`}
        </Text>
      </TouchableRipple>
      <TouchableRipple
        testID="aboutButton"
        style={styles.rippleButton}
        onPress={() => props?.navigate('About')}
        rippleColor={props?.chosenRippleColor}>
        <Text style={styles.rippleText} testID="aboutButtonText">
          {props?.language?.english ? `About` : `Technologie`}
        </Text>
      </TouchableRipple>
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
    borderWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'row',
  },
  rippleButton: {
    padding: 8,
    backgroundColor: '#2C3E50',
    borderRadius: 3,
    width: '45%',
    borderWidth: 1,
    borderColor: themeColors.white,
  },
  rippleButtonLogout: {
    padding: 8,
    backgroundColor: themeColors.salmon,
    borderRadius: 3,
    width: '45%',
    borderWidth: 1,
    borderColor: themeColors.white,
  },
  rippleText: {
    textAlign: 'center',
    letterSpacing: 0,
    color: 'white',
    fontWeight: 'bold',
  },
})
