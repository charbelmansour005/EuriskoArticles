import {View, Text} from 'react-native';
import {themeColors} from '../helpers/themeColors';
import React from 'react';

type Props = {};

const Copyright = (props: Props): JSX.Element => {
  return (
    <Text style={{fontSize: 12, color: themeColors.grey, textAlign: 'center'}}>
      {'Copyright © '} Eurisko Mobility {new Date().getFullYear()}
    </Text>
  );
};

export default Copyright;
