import {StyleSheet, Text, View, Linking, Image} from 'react-native'
import React from 'react'
import Logo from '../../../assets/eurisko.jpg'
import {themeColors} from '../../helpers/themeColors'
import {TouchableRipple} from 'react-native-paper'
import {ArticleCardModalProps} from './types'

const DashArticleModal = ({...props}: ArticleCardModalProps) => {
  return (
    <View style={styles.modalArticleView} testID="parent">
      <View style={styles.logoContainer} testID="logoContainer">
        <Image testID="image" source={Logo} style={styles.logoModal} />
        <TouchableRipple
          testID="modalBackButton"
          onPress={props?.hideModal}
          rippleColor={themeColors.darkgreen}
          style={styles.modalButton}>
          <Text
            testID="modalBackText"
            style={{color: 'black', fontWeight: 'bold'}}>
            {`Return to Dashboard`}
          </Text>
        </TouchableRipple>
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
          color: themeColors.darkgreen,
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
    height: 120,
    width: 110,
    borderRadius: 3,
    borderWidth: 0,
    borderColor: 'black',
  },
  modalArticleHeadline: {
    fontWeight: 'bold',
    color: themeColors.darkgreen,
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
    marginVertical: 20,
    borderRadius: 5,
  },
})
