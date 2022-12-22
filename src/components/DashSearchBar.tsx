import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

type SearchBarFunctionProps = {
  onChangeText: (arg?: any) => void;
  onPressClear: () => void;
};
type SearchBarProps = SearchBarFunctionProps & {
  search: string;
};

const SearchBar = ({...props}: SearchBarProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Articles"
        placeholderTextColor="gray"
        onChangeText={props.onChangeText}
        value={props.search}
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 0,
    // marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    flexDirection: 'row',
    opacity: 1,
  },
  searchInput: {backgroundColor: 'white', width: '80%', color: 'black'},
});
