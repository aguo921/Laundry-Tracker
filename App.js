import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import CurrentLaundry from './Components/CurrentLaundry';

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
      <CurrentLaundry data={data} setData={setData}/>
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
