import React from 'react'
import {ActivityIndicator} from 'react-native-paper'
import {spinnerColors} from '../../helpers/spinnerColors'

const LoadingSpinner = (): JSX.Element => {
  const randomSpinnerColor = spinnerColors[Math.floor(Math.random() * 4)]
  const chosenSpinnerColor: string = randomSpinnerColor
  return (
    <ActivityIndicator
      size="large"
      color={chosenSpinnerColor}
      style={{marginVertical: 120}}
    />
  )
}

export default LoadingSpinner
