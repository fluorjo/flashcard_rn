import React, {useState} from 'react'
import {Pressable, Text, View} from 'react-native'

function Settings() {
  const [count, setCount] = useState(1)

  return (
    <Pressable onPress={() => setCount(p => p + 1)}>
      <Text>{count}</Text>
    </Pressable>
  )
}

export default Settings
