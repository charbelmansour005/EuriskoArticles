import {StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import {List} from 'react-native-paper'

type Props = {
  expanded?: boolean
  handlePress?: () => void
}

const MoreNewsReports = ({...props}: Props) => {
  return (
    <ScrollView>
      <List.Section style={{marginBottom: 10}} title="TV News Reports">
        <List.Accordion
          right={props => (
            <List.Icon
              {...props}
              icon={{
                uri: 'https://icons.iconarchive.com/icons/flat-icons.com/flat/512/Flat-TV-icon.png',
              }}
            />
          )}
          title="We report live"
          expanded={props?.expanded}
          onPress={props?.handlePress}>
          <List.Item title="Mon to Fri 8:00PM till 9:00PM" />
          <List.Item title="Sat - 6:00PM till 7:00PM" />
          <List.Item title="Sun - 6:00PM till 7:00PM" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  )
}

export default MoreNewsReports

const styles = StyleSheet.create({})
