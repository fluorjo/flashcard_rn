import React from 'react';
import { View, Text } from 'react-native';

interface CardItemProps {
  card: {
    id: number;
    question: string;
    correctAnswer: string;
  };
}

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  return (
    <View>
      <Text>{card.question}</Text>
      <Text>{card.correctAnswer}</Text>
    </View>
  );
};

export default CardItem;