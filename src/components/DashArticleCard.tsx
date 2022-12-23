import {
  View,
  Text,
  StyleSheet,
  Linking,
  Modal,
  ScrollView,
  Image,
} from 'react-native';
import {Card, ActivityIndicator, Portal, Provider} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {themeColors} from '../helpers/themeColors';
import {Authors, AuthorImages} from '../helpers/authors';
import {rippleColors} from '../helpers/rippleColors';
import DashArticleModal from './DashArticleModal';
//LG
import LinearGradient from 'react-native-linear-gradient';

type ArticleCardBaseProps = {
  headline?: string;
  leadParagraph?: string;
  author?: string;
};

type ArticleCardAllProps = ArticleCardBaseProps & {
  url?: string | undefined | any;
  section?: string | null;
};

const DashArticleCard = ({...props}: ArticleCardAllProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalLoading, setModalLoading] = useState<boolean>(false);
  const [authorImage, setAuthorImage] = useState<string>(
    'https://i.ibb.co/y40w40C/ny.png',
  );

  const handleShowModal = (): void => {
    setModalLoading(true);

    setTimeout(() => {
      setIsVisible(true); // only to show some minimal feedback
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
    <LinearGradient
      colors={[
        'lightgreen',
        'white',
        'lightgreen',
        'forestgreen',
        'white',
        'lightgreen',
      ]}>
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
          <View style={styles.cardDescription}>
            <Text
              style={
                props.leadParagraph ===
                'To see this article, please hold your finger here'
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
                  <DashArticleModal
                    headline={props.headline}
                    author={props.author}
                    section={props.section}
                    url={props.url}
                    leadParagraph={props.leadParagraph}
                    hideModal={hideModal}
                  />
                </ScrollView>
              </Modal>
            </Portal>
          </Provider>
        </View>
      </Card>
    </LinearGradient>
  );
};

export default DashArticleCard;

const styles = StyleSheet.create({
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authorImages: {height: 25, width: 25, margin: 5, borderRadius: 20},
  parent: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: 'white',
    height: 160,
    borderRadius: 10,
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
    color: themeColors.pitchblack,
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
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});
