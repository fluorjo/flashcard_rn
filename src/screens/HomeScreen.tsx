import React, {useState, useCallback, useEffect, useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SafeAreaView, View, UnderlineText, TopBar} from '../theme/navigation';
import {NavigationProp} from '@react-navigation/native';

type HomeScreenProps = {
  navigation: NavigationProp<{}>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => console.log('Button clicked')}>
        <Text onPress={() => navigation.navigate('LeftScreen' as never)}>
          LeftScreen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
});
