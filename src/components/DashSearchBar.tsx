import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
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
      <Image
        source={require('../../assets/srh.png')}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search Articles"
        placeholderTextColor="gray"
        onChangeText={props.onChangeText}
        value={props.search}
        style={styles.searchInput}
      />
      {props.search ? (
        <Pressable style={{marginRight: 10}} onPress={props.onPressClear}>
          <Text style={styles.clearButton}>Clear</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 0,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
    flexDirection: 'row',
    opacity: 1,
  },
  searchInput: {backgroundColor: 'white', width: '80%', color: 'black'},
  clearButton: {
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'silver',
    paddingHorizontal: 4,
    borderRadius: 5,
  },
  searchIcon: {
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5,
  },
});
