import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';

type RootStackParamList = {
  Detail: {id: number};
  // 다른 화면들도 필요한 경우 추가 정의
};

type DetailScreenProps = {
  route: RouteProp<RootStackParamList, 'Detail'>;
};



const DetailScreen: React.FC<DetailScreenProps> = ({route}) => {
  return (
    <SafeAreaView>
      <Text>id: {route.params.id}</Text>
    </SafeAreaView>
  );
};

export default DetailScreen;
