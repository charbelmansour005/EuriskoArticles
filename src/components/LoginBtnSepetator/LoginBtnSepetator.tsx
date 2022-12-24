import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoginBtnSeperator = (): JSX.Element => {
  return (
    <View style={styles.rowflex}>
      <View style={styles.lineDesign} />
      <View>
        <Text style={styles.middleText}>Or</Text>
      </View>
      <View style={styles.lineDesign} />
    </View>
  );
};

export default LoginBtnSeperator;

const styles = StyleSheet.create({
  rowflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  lineDesign: {height: 1.2, backgroundColor: 'black', width: '35%'},
  middleText: {width: 50, textAlign: 'center', color: 'black'},
});
