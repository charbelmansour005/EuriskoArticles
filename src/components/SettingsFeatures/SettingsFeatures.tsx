import {StyleSheet, Text, View, Modal} from 'react-native'
import {
  Portal,
  TouchableRipple,
  Provider as PProvider,
} from 'react-native-paper'
import {themeColors} from '../../helpers/themeColors'
import React from 'react'
import {SettingsFeaturesProps} from './types'

const SettingsFeatures = ({...props}: SettingsFeaturesProps): JSX.Element => {
  return (
    <PProvider>
      <Portal>
        <Modal visible={props?.isVisible} onDismiss={props?.hideModal}>
          <View style={styles.featuresInfo}>
            <Text
              style={{
                color: 'gray',
                ...styles.featureText,
              }}>
              Hold an article to visit website
            </Text>
            <Text
              style={{
                color: 'gray',
                ...styles.featureText,
              }}>
              Press on an article to see more details
            </Text>
            <Text
              style={{
                color: props?.chosenRippleColor,
                ...styles.featureText,
              }}>
              Dynamic colors
            </Text>
            <Text
              onPress={props?.testToast}
              style={{
                color: 'gray',
                ...styles.featureText,
              }}>
              A Welcome Toast (Press to test)
            </Text>
          </View>
          <View style={styles.closeModalButtonContainer}>
            <TouchableRipple
              style={styles.rippleButtonModal}
              onPress={props?.hideModal}
              rippleColor={props?.chosenRippleColor}>
              <Text style={styles.rippleText}>Okay</Text>
            </TouchableRipple>
          </View>
        </Modal>
      </Portal>
    </PProvider>
  )
}

export default SettingsFeatures

const styles = StyleSheet.create({
  closeModalButtonContainer: {
    marginBottom: 25,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  rippleButtonModal: {
    padding: 8,
    borderRadius: 3,
    width: '50%',
    backgroundColor: themeColors.darkgray,
  },
  rippleText: {
    textAlign: 'center',
    letterSpacing: 0,
    color: 'white',
    fontWeight: 'bold',
  },
  featuresInfo: {
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 1,
    width: '100%',
  },
  featureText: {
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
