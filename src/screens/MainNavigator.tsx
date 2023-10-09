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
import {StyleSheet, View, Text} from 'react-native';

export default function MainNavigator() {
  return (
    <View style={[styles.view]}>
      <Text>top</Text>
      <Text>bottom</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', justifyContent: 'space-between'},
});
