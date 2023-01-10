import {View, TextInput, StyleSheet, Text, Image, Pressable} from 'react-native'
import {themeColors} from '../../helpers/themeColors'
import React from 'react'
import {DashSearchBarProps} from './types'

const DashSearchBar = ({...props}: DashSearchBarProps): JSX.Element => {
  return (
    <View style={styles.container} testID="parent">
      <Image
        testID="image"
        source={require('../../../assets/srh.png')}
        style={styles.searchIcon}
      />
      <TextInput
        testID="input"
        placeholder={
          props?.language?.english ? `Search Articles` : `Chercher des Articles`
        }
        placeholderTextColor="gray"
        cursorColor={themeColors.darkblue}
        onChangeText={props?.onChangeText}
        value={props?.search}
        style={styles.searchInput}
      />
      {props?.search ? (
        <Pressable
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}
          onPress={props?.onPressClear}
          android_ripple={{
            color: themeColors.lightgray,
            borderless: true,
            radius: 17,
          }}>
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
    width: '100%',
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
    color: 'gray',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    borderRadius: 5,
    // padding: 2,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    height: 22,
    width: 22,
    marginLeft: 5,
    marginRight: 5,
    tintColor: themeColors.darkblue,
  },
})
