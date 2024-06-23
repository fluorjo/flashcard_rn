import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import {SUPABASE_URL, DATABASE_URL, SUPABASE_ANON_KEY} from '@env';
import { supabase } from '../../supabase/supabase';

function Orders() {
const getItems = async ()=>{
  let { data: Card, error } = await supabase
  .from('Card')
  .select('*')
  return Card
}
useEffect(()=>{
  getItems().then((items)=>{console.log(items)})
},[])
  return (
    <View>
      <Text>{SUPABASE_URL}</Text>
    </View>
  );
}

export default Orders;
