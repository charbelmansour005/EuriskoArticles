import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {spinnerColors} from '../helpers/spinnerColors';

const LoadingSpinner = (): JSX.Element => {
  const randomSpinnerColor = spinnerColors[Math.floor(Math.random() * 10)];
  const chosenSpinnerColor: string = randomSpinnerColor;
  return (
    <ActivityIndicator
      size="small"
      color={chosenSpinnerColor}
      style={{marginVertical: 10}}
    />
  );
};

export default LoadingSpinner;
