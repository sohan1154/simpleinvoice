import React from 'react';
import { s, vs, ms } from 'react-native-size-matters/extend';
import {
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  fontSize,
  letterSpacing,
  color,
  space,
  fontStyle,
  marginTop,
  paddingTop,
  paddingBottom,
  flexWrap,
  width,
  marginRight,
  marginLeft,
} from 'styled-system';
import styled from 'styled-components/native';
import theme from '@theme';

const Text = styled.Text`
  ${fontSize}
  ${fontFamily}
    ${textAlign}
    ${lineHeight}
    ${fontWeight}
    ${letterSpacing}
    ${color}
    ${space}
    ${fontStyle}
    ${marginRight}
    ${marginLeft}
    ${marginTop}
    ${paddingTop}
    ${paddingBottom}
    ${flexWrap}
    ${width}
`;

Text.defaultProps = {
  fontSize: ms(15),
  color: theme.colors.black,
  fontFamily: theme.fonts.helveticaRegular,
};

const HelveticText = (props) => (
  <Text
    fontSize={ms(16)}
    color={theme.colors.black}
    fontFamily={theme.fonts.helveticaRegular}
    {...props}
  />
);

export {
  HelveticText,
};

export default Text;

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
