import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const LoginBtnSeperator = (props: Props): JSX.Element => {
  return (
    <View style={{marginTop: 25, ...styles.rowflex}}>
      <View style={{height: 1.2, backgroundColor: 'black', width: 100}} />
      <View>
        <Text style={{width: 50, textAlign: 'center', color: 'black'}}>Or</Text>
      </View>
      <View style={{height: 1.2, backgroundColor: 'black', width: 100}} />
    </View>
  );
};

export default LoginBtnSeperator;

const styles = StyleSheet.create({
  rowflex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
