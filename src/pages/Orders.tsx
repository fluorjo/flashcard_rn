import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import 'react-native-url-polyfill/auto';
import supabase from '../../supabase/supabase';
import CardItem from '../components/CardItem';
interface Card {
  id: number;
  question: string;
  correctAnswer: string;
}
function Orders() {
  const [cards, setCards] = useState<Card[]>([]);

  const getCards = async (): Promise<Card[]> => {
    let {data: Cards, error} = await supabase.from('Card').select('*');
    console.log(Cards)
    if (error) {
      console.error('Error fetching cards:', error);
      return [];
    }
    return Cards || [];
  };
  useEffect(() => {
    getCards().then(cards => {
      setCards(cards);
    });
  }, []);
  return (
    <View>
      <Text>dddd</Text>
      <FlatList
        data={cards}
        renderItem={({item, index}) => (
          <>
            <CardItem cards={item} />
          </>
        )}
        keyExtractor={cards => cards.id + ''}
      />

      {/* {cards.map(card => (
        <View key={card.id}>{card.question}</View>
      ))} */}
    </View>
  );
}

export default Orders;
