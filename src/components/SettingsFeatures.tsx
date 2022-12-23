import {StyleSheet, Text, View, Modal} from 'react-native';
import {Portal, TouchableRipple} from 'react-native-paper';
import {themeColors} from '../helpers/themeColors';
import React from 'react';

interface FunctionProps {
  hideModal: () => void;
  testToast: () => void;
}
interface Props extends FunctionProps {
  chosenRippleColor?: string;
  isVisible?: boolean;
}

const SettingsFeatures = ({...props}: Props): JSX.Element => {
  return (
    <Portal>
      <Modal visible={props.isVisible} onDismiss={props.hideModal}>
        <View style={styles.featuresInfo}>
          <Text
            style={{
              color: 'gray',
              ...styles.featureText,
            }}>
            Hold an article to read more or visit website
          </Text>
          <Text
            style={{
              color: 'gray',
              ...styles.featureText,
            }}>
            Press Read more on an article to open more details
          </Text>
          <Text
            style={{
              color: props.chosenRippleColor,
              ...styles.featureText,
            }}>
            Dynamic colors
          </Text>
          <Text
            onPress={props.testToast}
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
            onPress={props.hideModal}
            rippleColor={props.chosenRippleColor}>
            <Text style={styles.rippleText}>Okay</Text>
          </TouchableRipple>
        </View>
      </Modal>
    </Portal>
  );
};

export default SettingsFeatures;

const styles = StyleSheet.create({
  closeModalButtonContainer: {
    marginBottom: 25,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  rippleButtonModal: {
    padding: 4,
    borderRadius: 3,
    width: '100%',
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
});
