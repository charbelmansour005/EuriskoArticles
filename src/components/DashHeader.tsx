import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {themeColors} from '../helpers/themeColors';

const DashHeader = (): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTitleContainer}>
        <Text>Header - test</Text>
      </View>
    </View>
  );
};

export default DashHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: themeColors.orange,
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 0,
  },
});
