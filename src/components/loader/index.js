import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import theme from '@theme';
import { ms, s } from 'react-native-size-matters/extend';
import Modal from 'react-native-modal';

const Loader = ({ loading, color }) => {
  return (
    <Modal
      isVisible={loading}
      useNativeDriver
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={1500}
      animationOutTiming={1000}
      backdropColor={theme.colors.shadow}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
    >
      <View style={styles.container}>
        <ActivityIndicator
          size={ms(35)}
          color={color ?? theme.colors.blue22} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
