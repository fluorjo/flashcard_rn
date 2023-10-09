//에러 화면 방지
import {LogBox} from 'react-native';
console.error = error => error.apply;
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Property ']);
LogBox.ignoreLogs(['it is un']);
LogBox.ignoreLogs(['The title']);
LogBox.ignoreLogs(['']);
//
import React from 'react';
import MainNavigator from './src/screens/MainNavigator';
export default function App() {
  return <MainNavigator />;
}
