import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '@theme';
import { s, vs } from 'react-native-size-matters/extend';

const Separator = ({
  vertical = false,
  color = theme.colors.whiteGray,
  mh = 0,
  mv = 0,
  mt = 0,
  mr = 0,
  mb = 0,
  ml = 0,
}) => (
  <View
    style={[
      vertical ? styles.vertical : styles.horizontal,
      {
        backgroundColor: color,
        marginTop: mv || mt,
        marginRight: mh || mr,
        marginBottom: mv || mb,
        marginLeft: mh || ml,
      },
    ]}
  />
);

const styles = StyleSheet.create({
  vertical: {
    width: s(1),
    height: '100%',
  },
  horizontal: {
    width: '100%',
    height: vs(1),
  },
});

export default Separator;
