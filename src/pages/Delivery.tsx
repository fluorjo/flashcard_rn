import {DATABASE_URL, SUPABASE_ANON_KEY, SUPABASE_URL} from '@env';
import React from 'react';
import {Text, View} from 'react-native';

function Delivery() {
  console.log('SUPABASE_URL :: ', SUPABASE_URL);
  console.log('DATABASE_URL :: ', DATABASE_URL);
  console.log('SUPABASE_ANON_KEY :: ', SUPABASE_ANON_KEY);

  return (
    <View>
      <Text>{SUPABASE_URL}</Text>
    </View>
  );
}

export default Delivery;
