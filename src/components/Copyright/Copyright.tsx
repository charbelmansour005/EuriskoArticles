import {Text} from 'react-native'
import {themeColors} from '../../helpers/themeColors'
import React from 'react'

const Copyright = (): JSX.Element => {
  return (
    <Text
      style={{fontSize: 12, color: themeColors.grey, textAlign: 'center'}}
      testID="copyright">
      {'Copyright © '} Eurisko Mobility {new Date().getFullYear()}
    </Text>
  )
}

export default Copyright
