import {View, TextInput, StyleSheet, Text, Image, Pressable} from 'react-native'
import {themeColors} from '../../helpers/themeColors'
import React from 'react'
import {SearchBarProps} from './types'

const DashSearchBar = ({...props}: SearchBarProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/srh.png')}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder={
          props?.language?.english ? `Search Articles` : `Chercher des Articles`
        }
        placeholderTextColor="gray"
        onChangeText={props?.onChangeText}
        value={props?.search}
        style={styles.searchInput}
      />
      {props?.search ? (
        <Pressable style={{marginRight: 10}} onPress={props?.onPressClear}>
          <Text style={styles.clearButton}>
            {props?.language.english ? `Clear` : `Annuler`}
          </Text>
        </Pressable>
      ) : null}
    </View>
  )
}

export default DashSearchBar

const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: themeColors.white,
    borderRadius: 0,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
    flexDirection: 'row',
    opacity: 1,
  },
  searchInput: {
    backgroundColor: themeColors.white,
    width: '80%',
    color: themeColors.pitchblack,
  },
  clearButton: {
    color: themeColors.white,
    fontWeight: 'bold',
    backgroundColor: themeColors.green,
    borderRadius: 5,
    marginRight: 5,
    padding: 2,
  },
  searchIcon: {
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5,
  },
})
