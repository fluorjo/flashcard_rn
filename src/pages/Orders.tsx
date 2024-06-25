import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
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
    let { data: Cards, error } = await supabase.from('Card').select('*');
    
    if (error) {
      console.error('Error fetching cards:', error);
      return [];
    }
    
    console.log('Fetched Cards', Cards);
    
    return Cards || [];
  };

  useEffect(() => {
    getCards().then(cards => {
      setCards(cards);
    }).catch(err => {
      console.error('Error in useEffect:', err);
    });
  }, []);

  return (
    <View>
      <Text>Card List</Text>
      <FlatList
        data={cards}
        renderItem={({ item, index }) => (
          <>
            <CardItem card={item} />
          </>
        )}
        keyExtractor={card => card.id.toString()}
      />
    </View>
  );
}

export default Orders;
