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
    backgroundColor: theme.colors.whiteF2,
  },
  container: {
    flex: 1,
  },

  content: {
    ...padding(vs(24), 0),
    flexGrow: 1,
  },

  field: {
    fontSize: ms(12),
    color: theme.colors.gray,
    lineHeight: vs(20),
  },
  value: {
    fontSize: ms(12),
    fontWeight: 'bold',
  },

  addButton: {
    zIndex: 999,
    position: 'absolute',
    height: s(50),
    width: s(50),
    borderRadius: s(25),
    backgroundColor: theme.colors.red07,
    right: s(24),
    bottom: vs(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
