import React from 'react';
import { KeyboardAvoidingView, Modal, View } from 'react-native';
import { isIOS } from '@utils/device';
import styles from './styles';
import BottomSheetHeader from './bottomSheetHeader';

const BottomSheet = ({ size = 'm', children, modalStyle, containerStyle, behavior, keyboardVerticalOffset }) => (
  <Modal
    animationType="slide"
    transparent
    statusBarTranslucent={true}
    onRequestClose={() => {}}>
    <KeyboardAvoidingView
      behavior={behavior ?? (isIOS ? 'padding' : 'height')}
      style={styles.keyboardView}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={[styles.modal, modalStyle]}>
        <View style={[styles.container, { height: getHeight(size) }, containerStyle]}>
          {children}
        </View>
      </View>
    </KeyboardAvoidingView>
  </Modal>
);

export { BottomSheetHeader }

export default BottomSheet;

const getHeight = (size) => {
  switch (size) {
    case 's':
      return '33%';
    case 'm':
      return '70%';
  }
};
