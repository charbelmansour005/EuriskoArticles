// react / native
import React from 'react'
import {StyleSheet, Text, View, Linking, Image} from 'react-native'
import {TouchableRipple} from 'react-native-paper'
// logo + types + helper
import {themeColors} from '../../helpers/themeColors'
import Logo from '../../../assets/eurisko.jpg'
import {ArticleCardModalProps} from './types'

const DashArticleModal = ({...props}: ArticleCardModalProps) => {
  console.log(props.multimedia)

  const IMG_URL = 'https://static01.nyt.com/'

  return (
    <View style={styles.modalArticleView} testID="parent">
      <TouchableRipple
        testID="modalBackButton"
        onPress={props?.hideModal}
        rippleColor={themeColors.lightgray}
        style={styles.modalButton}>
        <Text
          testID="modalBackText"
          style={{color: 'black', fontWeight: 'bold'}}>
          Return
        </Text>
      </TouchableRipple>
      <View style={styles.logoContainer} testID="logoContainer">
        {props?.multimedia[0]?.url?.length ? (
          <Image
            source={{uri: IMG_URL + props.multimedia[0].url}}
            style={styles.ImageModal}
          />
        ) : (
          <Image testID="image" source={Logo} style={styles.logoModal} />
        )}
      </View>
      <Text
        testID="modalHeadline"
        selectable={true}
        style={{letterSpacing: 1, ...styles.modalArticleHeadline}}>
        {props?.headline}
      </Text>
      <Text
        testID="modalAuthor"
        selectable={true}
        style={{
          color: themeColors.pitchblack,
          ...styles.modalArticleElements,
        }}>
        {props.author}
      </Text>
      <Text
        testID="modalSection"
        style={{
          color: themeColors.pitchblack,
          ...styles.modalArticleElements,
        }}>
        {props?.section}
      </Text>
      <Text
        testID="webLink"
        onPress={() => Linking.openURL(props?.url)}
        style={{
          color: themeColors.darkgray,
          fontWeight: 'bold',
          ...styles.modalArticleElements,
        }}>
        View on Website
      </Text>
      <Text
        testID="leadParagraph"
        selectable={true}
        style={styles.modalArticleParagraph}>
        {props?.leadParagraph}
      </Text>
      {/* <Image source={{uri: `https://www.nytimes.com/${props.image}`}} /> */}
    </View>
  )
}

export default DashArticleModal

const styles = StyleSheet.create({
  modalArticleView: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'relative',
    marginVertical: '20%',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoModal: {
    height: 110,
    width: 105,
    borderRadius: 3,
    borderWidth: 0,
    borderColor: 'black',
    marginBottom: 20,
  },
  ImageModal: {
    height: 150,
    width: 150,
    borderRadius: 3,
    borderWidth: 0,
    borderColor: 'black',
    marginBottom: 20,
  },
  modalArticleHeadline: {
    fontWeight: 'bold',
    color: themeColors.darkgray,
    padding: 10,
    fontSize: 15,
    borderTopWidth: 1,
    borderColor: themeColors.lightgray,
    textAlign: 'center',
  },
  modalArticleElements: {
    padding: 10,
    fontSize: 15,
    borderTopWidth: 1,
    borderColor: themeColors.lightgray,
    textAlign: 'center',
  },
  modalArticleParagraph: {
    color: 'black',
    padding: 20,
    borderColor: themeColors.lightgray,
    borderBottomWidth: 1,
    borderRadius: 0,
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  modalButton: {
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
})
