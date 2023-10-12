import React, {useState} from 'react';
import {Platform, StyleSheet, Keyboard, Alert} from 'react-native';
// prettier-ignore
import {SafeAreaView, View, Text, UnderlineText, TextInput, TouchableView,
TopBar, MaterialCommunityIcon as Icon} from '../theme/navigation'
import * as D from '../data';
import {useAutoFocus, AutoFocusProvider} from '../contexts';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import LeftScreen from './LeftScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LeftScreen" component={LeftScreen} />
    </Stack.Navigator>
  );
}
