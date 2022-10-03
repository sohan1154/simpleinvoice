import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import theme from '@theme';

const SafeContainer = ({
  safeStyle,
  containerStyle,
  children,
}) => {
  return (
    <SafeAreaView style={[styles.safe, safeStyle]}>
      <View style={[styles.container, containerStyle]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  container: {},
});

export default SafeContainer;
