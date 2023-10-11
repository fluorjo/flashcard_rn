import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View, UnderlineText, TopBar} from '../theme/navigation';
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts';
import * as D from '../data';
import Person from './Person';
import {LeftRightNavigation} from '../components';
import type {LeftRightNavigationMethods} from '../components';

export default function Home() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});
