import {
  View,
  Text,
  StyleSheet,
  Linking,
  Modal,
  ScrollView,
  Image,
} from 'react-native';
import {useEffect} from 'react';
import {Card, TouchableRipple, ActivityIndicator} from 'react-native-paper';
import {useState} from 'react';
import {Portal, Provider} from 'react-native-paper';
import {themeColors} from '../helpers/themeColors';
import Logo from '../../assets/eurisko.jpg';
import {Authors, AuthorImages} from '../helpers/authors';
import {rippleColors} from '../helpers/rippleColors';

type ArticleCardBaseProps = {
  headline?: string;
  leadParagraph?: string;
  author?: string;
};

type ArticleCardAllProps = ArticleCardBaseProps & {
  url?: string | undefined | any;
  section?: string | null;
};

const ArticleCard = ({...props}: ArticleCardAllProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalLoading, setModalLoading] = useState<boolean>(false);
  const [authorImage, setAuthorImage] = useState<string>(
    'https://i.ibb.co/y40w40C/ny.png',
  );

  const handleShowModal = (): void => {
    setModalLoading(true);

    setTimeout(() => {
      setIsVisible(true);
      setModalLoading(false);
    }, 100);
  };

  const hideModal = (): void => {
    setIsVisible(false);
  };

  const AuthorImage = (): void => {
    switch (props.author) {
      case Authors.Katherine:
        setAuthorImage(AuthorImages.Katherine_Pic);
        break;
      case Authors.Frank:
        setAuthorImage(AuthorImages.Frank_Pic);
        break;
      case Authors.Jennifer:
        setAuthorImage(AuthorImages.Jennifer_Pic);
        break;
      case Authors.Floyd:
        setAuthorImage(AuthorImages.Floyd_Pic);
        break;
      case Authors.NY:
        setAuthorImage(AuthorImages.NY_Pic);
        break;
      case Authors.Tom:
        setAuthorImage(AuthorImages.Tom_Pic);
        break;
      case Authors.Unknown:
        setAuthorImage(AuthorImages.Unknown_Pic);
        break;
      case Authors.Anahad:
        setAuthorImage(AuthorImages.Anahad_Pic);
        break;
      case Authors.RNS:
        setAuthorImage(AuthorImages.RNS_Pic);
        break;
    }
  };

  useEffect(() => {
    AuthorImage();
  }, []);

  const randomRippleColor = rippleColors[Math.floor(Math.random() * 10)];
  const chosenRippleColor: string = randomRippleColor;

  return (
    <Card
      mode="elevated"
      onPress={handleShowModal}
      onLongPress={() => Linking.openURL(props.url)}
      style={styles.parent}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {props.headline?.trim()}
        </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image source={{uri: authorImage}} style={styles.authorImages} />
          <Text style={styles.cardAuthor} numberOfLines={1}>
            {props.author?.trim()}
          </Text>
          {modalLoading && (
            <ActivityIndicator
              style={{marginLeft: 10}}
              size="small"
              color={chosenRippleColor}
            />
          )}
        </View>
        {/* might use */}
        {/* <View
          style={{
            height: 1,
            backgroundColor: themeColors.transparentGray,
            width: '50%',
          }}></View> */}
        <View style={styles.cardDescription}>
          <Text
            style={
              props.leadParagraph ===
              'To see this article, please hold the card'
                ? styles.cardTextDescEmpty
                : styles.cardTextDesc
            }
            lineBreakMode="tail"
            numberOfLines={3}>
            {props.leadParagraph?.trim()}
          </Text>
        </View>
        <Provider>
          <Portal>
            <Modal visible={Boolean(isVisible)} onDismiss={hideModal}>
              <ScrollView>
                <View style={styles.modalArticleView}>
                  <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logoModal} />
                    <TouchableRipple
                      onPress={hideModal}
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
              </ScrollView>
            </Modal>
          </Portal>
        </Provider>
      </View>
    </Card>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    padding: 10,
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 5,
  },
  logoModal: {
    height: 120,
    width: 110,
    borderRadius: 3,
    borderWidth: 4,
    borderColor: 'black',
  },
  authorImages: {height: 25, width: 25, margin: 5, borderRadius: 20},
  modalArticleHeadline: {
    fontWeight: 'bold',
    color: themeColors.salmon,
    padding: 10,
    fontSize: 15,
    borderTopWidth: 1,
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
  modalArticleElements: {
    padding: 10,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: themeColors.lightgray,
    textAlign: 'left',
  },
  modalArticleView: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'relative',
    marginVertical: '20%',
  },
  parent: {
    marginVertical: 0.5,
    backgroundColor: 'white',
    height: 160,
    borderRadius: 0,
  },
  cardContainer: {
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 10,
    padding: 5,
    width: '99%',
  },
  cardTitle: {
    fontSize: 16,
    color: themeColors.salmon,
    padding: 1,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  cardAuthor: {
    fontWeight: '400',
    fontSize: 12,
    color: themeColors.darkgray,
    marginTop: 9,
    fontFamily: 'Roboto',
  },
  cardDescription: {
    marginTop: 10,
    fontFamily: 'Roboto',
    padding: 5,
  },
  cardTextDesc: {
    color: themeColors.pitchblack,
    fontSize: 15,
    fontFamily: 'sans-serif-condensed',
  },
  cardTextDescEmpty: {
    color: themeColors.purple,
    textAlign: 'center',
    fontStyle: 'italic',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});
