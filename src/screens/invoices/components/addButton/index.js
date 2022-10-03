import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '@theme';
import { s } from 'react-native-size-matters/extend';

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={onPress}
    >
      <Ionicons
        name={'add'}
        size={s(26)}
        color={theme.colors.white} />
    </TouchableOpacity>
  );
};

export default AddButton;
