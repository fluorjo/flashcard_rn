import React from 'react';
import {Text, View} from 'react-native';
const CardItem = (cards) => {
  return (
    <View>
      <Text>{cards.question}</Text>
    </View>
  );
};
export default CardItem;
