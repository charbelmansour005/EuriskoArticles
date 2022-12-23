import {StyleSheet, Text, View, Linking, Image} from 'react-native';
import React from 'react';
import Logo from '../../assets/eurisko.jpg';
import {themeColors} from '../helpers/themeColors';
import {TouchableRipple} from 'react-native-paper';

type ArticleCardModalProps = {
  headline?: string;
  leadParagraph?: string;
  author?: string;
  url?: string | undefined | any;
  section?: string | null;
  hideModal?: () => void;
};

const DashArticleModal = ({...props}: ArticleCardModalProps) => {
  return (
    <View style={styles.modalArticleView}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logoModal} />
        <TouchableRipple
          onPress={props.hideModal}
          rippleColor={themeColors.salmon}
          style={styles.modalButton}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {`Return to Dashboard`}
          </Text>
        </TouchableRipple>
      </View>
      <Text
        selectable={true}
        style={{letterSpacing: 1, ...styles.modalArticleHeadline}}>
        {props.headline}
      </Text>
      <Text
        selectable={true}
        style={{
          color: themeColors.pitchblack,
          ...styles.modalArticleElements,
        }}>
        {props.author}
      </Text>
      <Text
        style={{
          color: themeColors.pitchblack,
          ...styles.modalArticleElements,
        }}>
        {props.section}
      </Text>
      <Text
        onPress={() => Linking.openURL(props.url)}
        style={{
          color: themeColors.salmon,
          fontWeight: 'bold',
          ...styles.modalArticleElements,
        }}>
        View on Website
      </Text>
      <Text selectable={true} style={styles.modalArticleParagraph}>
        {props.leadParagraph}
      </Text>
    </View>
  );
};

export default DashArticleModal;

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
    borderWidth: 4,
    borderColor: 'black',
  },
  modalArticleHeadline: {
    fontWeight: 'bold',
    color: themeColors.salmon,
    padding: 10,
    fontSize: 15,
    borderTopWidth: 1,
    borderColor: themeColors.lightgray,
    textAlign: 'left',
  },
  modalArticleElements: {
    padding: 10,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: themeColors.lightgray,
    textAlign: 'left',
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
});
