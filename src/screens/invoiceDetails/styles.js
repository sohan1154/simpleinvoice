import { StyleSheet } from 'react-native';
import theme from '@theme';
import { s, vs, ms } from 'react-native-size-matters/extend';
import { padding } from '@utils/styles';

export default StyleSheet.create({
  headerTitle: {
    color: theme.colors.white,
    letterSpacing: s(1),
  },
  safeArea: {
    backgroundColor: theme.colors.white,
  },
  container: {
    flex: 1,
    ...padding(vs(24), s(24)),
  },

  field: {
    fontSize: ms(14),
    color: theme.colors.gray,
    lineHeight: vs(26),
  },
  value: {
    fontSize: ms(14),
    fontWeight: 'bold',
  },
});
