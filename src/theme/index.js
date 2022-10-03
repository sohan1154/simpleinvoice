import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
let screenHeight = height;
let screenWidth = width;

if (width > height) {
  screenHeight = width;
  screenWidth = height;
}

const theme = {
  dark: false,
  colors: {
    transparent: 'transparent',
    white: '#FFFFFF',
    black: '#000000',
    primary: '#DDBC1E',
    btnPrimary: '#DDBC1E',
    shadow: 'rgba(0, 0, 0, 0.25)',
    blue22: '#000022',
    blue252: 'rgb(23, 123, 252)',
    whiteGray: 'rgb(230, 230, 230)',
    whiteMuted: 'rgba(255, 255, 255, 0.6)',
    whiteF2: '#F2F2F2',
    gray: '#222222',
    gray8A: '#8A8A8F',
    red07: '#CF0307',
  },
  metrics: {
    screenHeight: screenHeight,
    screenWidth: screenWidth,
  },
  fonts: Platform.select({
    ios: {
      helveticaRegular: "Helvetica"
    },
    android: {
      helveticaRegular: "Helvetica"
    }
  })
};

export default theme;
