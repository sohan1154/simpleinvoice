import { StyleSheet } from 'react-native';
import theme from '@theme';
import { s, vs, ms } from 'react-native-size-matters/extend';

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.shadow,
  },
  keyboardView: {
    height: '100%',
    width: '100%',
  },
  container: {
    backgroundColor: theme.colors.white,
    borderTopRightRadius: ms(20),
    borderTopLeftRadius: ms(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: vs(56),
    paddingHorizontal: s(10),
    borderBottomWidth: vs(1),
    borderColor: theme.colors.whiteGray,
    borderTopRightRadius: ms(20),
    borderTopLeftRadius: ms(20),
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    marginLeft: s(40),
  },
  closeButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: s(40),
  },
});
