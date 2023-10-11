import React, {useState} from 'react';
import {Platform, StyleSheet, Keyboard, Alert} from 'react-native';
// prettier-ignore
import {SafeAreaView, View, Text, UnderlineText, TextInput, TouchableView,
TopBar, MaterialCommunityIcon as Icon} from '../theme/navigation'
import * as D from '../data';
import {useAutoFocus, AutoFocusProvider} from '../contexts';

import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeLeft" component={HomeLeft} />
      <Stack.Screen name="HomeRight" component={HomeRight} />
    </Stack.Navigator>
  );
}
