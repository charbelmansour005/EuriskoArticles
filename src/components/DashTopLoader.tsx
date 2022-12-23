import {StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {themeColors} from '../helpers/themeColors';
import React from 'react';

const DashTopLoader = (): JSX.Element => {
  return (
    <View style={styles.loaderContainer}>
      <View style={styles.loader}>
        <Text style={styles.loaderText}>Loading the latest news...</Text>
        <ActivityIndicator
          size="small"
          color={themeColors.white}
          style={{marginHorizontal: 5}}
        />
      </View>
    </View>
  );
};

export default DashTopLoader;

const styles = StyleSheet.create({
  loaderContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loader: {
    padding: 10,
    backgroundColor: 'gray',
    width: 220,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  loaderText: {color: 'white', fontWeight: 'bold'},
});
