import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextField } from 'rn-material-ui-textfield';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { vs, ms, s } from 'react-native-size-matters/extend';
import theme from '@theme';

const FloatingLabelTextInput = (props) => {
  const {
    value,
    onChangeText,
    label,
    error,
    secureTextEntry,
    passwordIcon,
    onIconPress,
    isPasswordField
  } = props;

  return (
    <View style={styles.inputContainer}>
      <TextField
        value={value}
        onChangeText={onChangeText}
        label={label}
        error={error}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        labelTextStyle={styles.label}
        containerStyle={styles.containerStyle}
        textColor={theme.colors.black}
        tintColor={theme.colors.black}
        baseColor={theme.colors.black}
        fontSize={ms(14)}
        labelFontSize={ms(8)}
        lineWidth={0}
        contentInset={{ top: 0, left: 6, right: 6, label: 10 }}
        autoCapitalize={'none'}
        autoCorrect={false}
        activeLineWidth={0}
        textContentType={'oneTimeCode'}
      />
      {isPasswordField && (
        <Icons
          name={passwordIcon}
          size={20}
          color={theme.colors.white}
          onPress={onIconPress} />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: ms(8),
    borderWidth: vs(.8),
    borderColor: 'rgba(0, 0, 0, 0.3)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: vs(12),
  },
  containerStyle: {
    height: vs(50),
    width: '100%',
  },
  input: {
    paddingHorizontal: s(8),
    fontFamily: theme.fonts.helveticaRegular,
    color: theme.colors.black,
    flex: 1,
  },
  label: {
    fontFamily: theme.fonts.helveticaRegular,
    textTransform: 'uppercase',
  },
});

export default FloatingLabelTextInput;
