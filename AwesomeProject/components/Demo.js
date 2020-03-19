import React, { useState, useEffect } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 30,
  },
});


export const Demo  = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={styles.red}>Count is {count}.</Text>
      <Button onPress={() => setCount(count + 1)} title='Increase Count!' />
    </View>
  )
}