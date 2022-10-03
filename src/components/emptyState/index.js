import React from 'react';
import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters/extend';
import theme from '@theme';
import { HelveticText } from '@components';
import { margin } from '@utils/styles';

const EmptyState = ({ title }) => {
  return (
    <HelveticText style={styles.emptyListText}>
      {title}
    </HelveticText>
  );
};

const styles = StyleSheet.create({
  emptyListText: {
    ...margin(0, 12),
    fontSize: ms(14),
    color: theme.colors.gray8A,
  },
});

export default EmptyState;
