/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//에러 화면 방지
import {LogBox} from 'react-native';

import 'react-native-url-polyfill/auto';


AppRegistry.registerComponent(appName, () => App);
