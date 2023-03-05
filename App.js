import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import LaundryList from './Components/LaundryList';



export default function App() {
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      <Text>Current Laundry</Text>
      <LaundryList data={data} setData={setData} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
