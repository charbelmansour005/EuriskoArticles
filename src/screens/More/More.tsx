import {StyleSheet, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {PrivacyPolicy, MoreNewsReports} from '../../components/index'
import React from 'react'

const More = () => {
  const [expanded, setExpanded] = React.useState<boolean>(true)
  const handlePress = () => setExpanded(!expanded)
  return (
    <LinearGradient
      colors={['white', 'white', 'white', '#5865F2']}
      style={styles.gradientStyle}>
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
