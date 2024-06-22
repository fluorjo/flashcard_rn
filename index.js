/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//에러 화면 방지
import {LogBox} from 'react-native';
console.error = error => error.apply;
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Property ']);
LogBox.ignoreLogs(['it is un']);
LogBox.ignoreLogs(['The title']);
LogBox.ignoreLogs(['']);
LogBox.ignoreLogs(['Loading from metro...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications
//

AppRegistry.registerComponent(appName, () => App);
