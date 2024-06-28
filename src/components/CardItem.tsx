import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardItemProps {
  card: {
    id: number;
    question: string;
    correctAnswer: string;
  };
}
const CardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <View style={styles.Card}>
      <Text>{card.question}</Text>
       {/* 생각해보니까 이렇게 바로 문제랑 정답이 다 나오면 안되겠구나.  */}
      {/* <Text>{card.correctAnswer}</Text> */}
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  Card:{
    width: '90%',
    height:46,
    borderWidth:1,
    backgroundColor:'#ffffff',
    borderRadius:5,
  }
})