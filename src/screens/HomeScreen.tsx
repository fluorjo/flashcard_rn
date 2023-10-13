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

type RootStackParamList = {
  navigation: any;
  Detail: {id: number};
  // 다른 화면들도 필요한 경우 추가 정의
};

type HomeScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const HomeScreen: React.FC<RootStackParamList> = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => console.log('Button clicked')}>
        <Text onPress={() => navigation.navigate('LeftScreen' as never)}>
          LeftScreen
        </Text>
        <Text onPress={() => navigation.navigate('Detail', {id: 1})}>
          Detail 1
        </Text>
        <Text onPress={() => navigation.navigate('Detail', {id: 2})}>
          Detail 2
        </Text>
        <Text onPress={() => navigation.navigate('Detail', {id: 3})}>
          Detail 3
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
