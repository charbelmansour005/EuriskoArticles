import {StyleSheet, Text, View} from 'react-native'
import {Switch} from 'react-native-paper'
// import {useAppSelector} from '../../app/rtkHooks';
import React, {Fragment} from 'react'
import {Props, LangFeature} from './types'

const SettingsLangSwitch = ({...props}: Props): JSX.Element => {
  // const language = useAppSelector(state => state.language);
  const LangFeature: LangFeature = {
    englishDefinition:
      'Changing the language will only affect that of the application and not the language which the articles are displayed in, the change will be system wide.',
    frenchDefinition:
      "Changer la langue n'affectera que celle de l'application et non la langue dans laquelle les articles sont affichés, le changement sera à l'échelle du système.",
  }

  return (
    <Fragment>
      <View style={styles.paperContainerFlex} testID="parent">
        <Text style={styles.BoldSmallNoMargin} testID="languageOptionFrench">
          {props?.language?.english ? `French` : `Francais`}
        </Text>
        <Switch
          color="silver"
          value={props?.language?.english}
          onValueChange={props?.onToggleSwitch}
          testID="switch"
        />
        <Text style={styles.BoldSmallNoMargin} testID="languageOptionEnglish">
          {' '}
          {props?.language?.english ? `English` : `Anglais`}
        </Text>
      </View>
      <View testID="languageExplanation">
        {props?.language?.english ? (
          <Text style={styles.languageExplanation}>
            {LangFeature.englishDefinition}
          </Text>
        ) : (
          <Text style={styles.languageExplanation}>
            {LangFeature.frenchDefinition}
          </Text>
        )}
      </View>
    </Fragment>
  )
}

export default SettingsLangSwitch

const styles = StyleSheet.create({
  BoldSmallNoMargin: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'black',
  },
  paperContainerFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'row',
  },
  languageExplanation: {
    marginLeft: 20,
    fontSize: 13,
    marginBottom: 20,
    lineHeight: 20,
    color: 'black',
  },
})
