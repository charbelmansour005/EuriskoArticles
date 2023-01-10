import React from 'react'
import {StyleSheet, ScrollView, StatusBar} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {PrivacyPolicy, MoreNewsReports} from '../../components/index'
import {themeColors} from '../../helpers/themeColors'

const More = () => {
  const [expanded, setExpanded] = React.useState<boolean>(true)
  const handlePress = () => setExpanded(!expanded)
  return (
    <LinearGradient
      colors={['white', 'white', 'white', themeColors.darkblue]}
      style={styles.gradientStyle}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="white"
      />
      <ScrollView>
        <PrivacyPolicy />
        <MoreNewsReports expanded={expanded} handlePress={handlePress} />
      </ScrollView>
    </LinearGradient>
  )
}

export default More

const styles = StyleSheet.create({
  gradientStyle: {width: '100%', height: '100%'},
})
