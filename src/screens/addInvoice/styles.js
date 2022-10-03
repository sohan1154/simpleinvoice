import { StyleSheet } from 'react-native';
import theme from '@theme';
import { s, vs, ms } from 'react-native-size-matters/extend';
import { padding } from '@utils/styles';

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    flexGrow: 1,
    paddingBottom: vs(40),
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    ...padding(vs(16), s(16), vs(40)),
  },
  saveButton: {
    alignSelf: 'flex-end',
    width: s(120),
    borderRadius: s(50),
    backgroundColor: theme.colors.blue252,
  },
  saveButtonText: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});
