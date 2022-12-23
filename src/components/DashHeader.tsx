import React from 'react';
import {View, StyleSheet} from 'react-native';
import DashSearchBar from './DashSearchBar';
import {themeColors} from '../helpers/themeColors';

type SearchProps = {
  search: string;
  setSearch: (arg?: any) => void;
};

const DashHeader = ({...props}: SearchProps): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTitleContainer}></View>
      <DashSearchBar
        search={props.search}
        onChangeText={val => props.setSearch(val)}
        onPressClear={() => props.setSearch('')}
      />
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
