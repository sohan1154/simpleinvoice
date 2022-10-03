import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { HelveticText } from '@components';
import theme from '@theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { s } from 'react-native-size-matters/extend';

const BottomSheetHeader = ({ title, onClose }) => (
  <View style={styles.header}>
    <HelveticText style={styles.headerText}>
      {title}
    </HelveticText>
    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
      <Ionicons name={'close'} size={s(20)} color={theme.colors.black} />
    </TouchableOpacity>
  </View>
);

export default BottomSheetHeader;
