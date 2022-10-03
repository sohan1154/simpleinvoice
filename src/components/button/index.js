import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '@theme';
import { HelveticText } from '@components';
import { vs, ms, s } from 'react-native-size-matters/extend';

const Button = ({
  style,
  disabled,
  loading,
  onPress,
  title,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={[styles.btn, style]}
    >
      {(loading) ? (
        <ActivityIndicator size="small" color={theme.colors.white} />
      ) : (
        <HelveticText style={[styles.title, textStyle]}>{title}</HelveticText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: s(317),
    height: vs(46),
    flexDirection: 'row',
    backgroundColor: theme.colors.btnPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(4),
  },
  title: {
    fontSize: ms(14),
    color: theme.colors.black,
    textTransform: 'uppercase',
  },
});

export default Button;
