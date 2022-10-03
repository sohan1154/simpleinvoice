/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry, LogBox, TouchableOpacity, Text, TextInput } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
TouchableOpacity.defaultProps.activeOpacity = 0.6

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false

LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
