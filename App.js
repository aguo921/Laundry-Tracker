import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import LaundryList from './Components/LaundryList';



export default function App() {
  const defaultData = [{
    id: '1',
    name: 'Shirt',
    description: 'Red',
    maxWears: 5,
    wears: 1
  }
  ]
  const [data, setData] = useState(defaultData);

  return (
    <View style={styles.container}>
      <LaundryList data={data} setData={setData} headline="Current Laundry"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
