// react / native
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Modal,
  ScrollView,
  Image,
} from 'react-native'
import {Card, ActivityIndicator, Portal, Provider} from 'react-native-paper'
import {useEffect, useState} from 'react'
// helpers
import {themeColors} from '../../helpers/themeColors'
import {Authors, AuthorImages} from '../../helpers/authors'
import {rippleColors} from '../../helpers/rippleColors'
// libraries +
import LinearGradient from 'react-native-linear-gradient'
// components
import {DashArticleModal} from '../index'
// types
import {ArticleCardAllProps} from './types'

const DashArticleCard = ({...props}: ArticleCardAllProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [modalLoading, setModalLoading] = useState<boolean>(false)
  const [authorImage, setAuthorImage] = useState<string>(
    'https://i.ibb.co/y40w40C/ny.png',
  )

  const handleShowModal = (): void => {
    setModalLoading(true)

    setTimeout(() => {
      setIsVisible(true) // only to show some minimal feedback
      setModalLoading(false)
    }, 50)
  }

  const hideModal = (): void => {
    setIsVisible(false)
  }

  const AuthorImage = (): void => {
    switch (props?.author) {
      case Authors.Katherine:
        setAuthorImage(AuthorImages.Katherine_Pic)
        break
      case Authors.Frank:
        setAuthorImage(AuthorImages.Frank_Pic)
        break
      case Authors.Jennifer:
        setAuthorImage(AuthorImages.Jennifer_Pic)
        break
      case Authors.Floyd:
        setAuthorImage(AuthorImages.Floyd_Pic)
        break
      case Authors.NY:
        setAuthorImage(AuthorImages.NY_Pic)
        break
      case Authors.Tom:
        setAuthorImage(AuthorImages.Tom_Pic)
        break
      case Authors.Unknown:
        setAuthorImage(AuthorImages.Unknown_Pic)
        break
      case Authors.Anahad:
        setAuthorImage(AuthorImages.Anahad_Pic)
        break
      case Authors.RNS:
        setAuthorImage(AuthorImages.RNS_Pic)
        break
    }
  }

  useEffect(() => {
    AuthorImage()
  }, [])

  const randomRippleColor = rippleColors[Math.floor(Math.random() * 10)]
  const chosenRippleColor: string = randomRippleColor
  const IMG_URL = 'https://static01.nyt.com/'
  return (
    <View>
      <Card
        mode="elevated"
        onPress={handleShowModal}
        style={
          props?.multimedia[0]?.url?.length ? styles.parentImage : styles.parent
        }>
        <View style={styles.cardContainer}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={styles.cardTitle} numberOfLines={1}>
              {props?.headline?.trim()}
            </Text>
            {/* <Image
              source={require('../../../assets/plant.jpg')}
              style={{
                height: 20,
                width: 20,
                right: 0,
                top: 0,
                position: 'absolute',
              }}
            /> */}
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={{uri: authorImage}} style={styles.authorImages} />
            <Text style={styles.cardAuthor} numberOfLines={1}>
              {props?.author?.trim()}
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
            {props?.multimedia[0]?.url?.length ? (
              <View style={styles.logoContainer}>
                <Image
                  source={{uri: IMG_URL + props.multimedia[0].url}}
                  style={styles.ImageModal}
                />
                <View
                  style={{
                    height: 1,
                    backgroundColor: themeColors.lightgray,
                    width: '50%',
                    marginVertical: 10,
                  }}></View>
              </View>
            ) : null}
            <Text
              style={
                props?.leadParagraph === 'To see this article, hold here'
                  ? styles.cardTextDescEmpty
                  : styles.cardTextDesc
              }
              lineBreakMode="tail"
              numberOfLines={3}>
              {props?.leadParagraph?.trim()}
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
                    multimedia={props.multimedia}
                    hideModal={hideModal}
                  />
                </ScrollView>
              </Modal>
            </Portal>
          </Provider>
        </View>
      </Card>
    </View>
  )
}

export default DashArticleCard

const styles = StyleSheet.create({
  ImageModal: {
    height: 100,
    width: 100,
    borderRadius: 3,
    borderWidth: 0,
    borderColor: 'black',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authorImages: {height: 25, width: 25, margin: 5, borderRadius: 20},
  parent: {
    marginVertical: 2,
    marginHorizontal: 5,
    backgroundColor: 'white',
    height: 160,
    borderRadius: 5,
  },
  parentImage: {
    marginVertical: 2,
    marginHorizontal: 5,
    backgroundColor: 'white',
    height: 290,
    borderRadius: 5,
  },
  cardContainer: {
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 10,
    padding: 5,
    width: '99%',
  },
  cardTitle: {
    fontSize: 15,
    color: '#2C3E50',
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
    marginTop: 5,
    fontFamily: 'Roboto',
    padding: 1,
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
})
