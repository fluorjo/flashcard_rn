import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function MainNavigator() {
  return (
    <SafeAreaView style={[styles.view]}>
      <Text style={[styles.text]}>aa</Text>
      <Text>aasdasd</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', justifyContent: 'space-between'},
  text: {fontSize: 30},
});
