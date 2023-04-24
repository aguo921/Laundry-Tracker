import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import CurrentLaundry from './Components/CurrentLaundry';
import Settings from './Components/Settings';

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
  const [multiplier, setMultiplier] = useState(1);

  return (
    <View style={styles.container}>
      <CurrentLaundry data={data} setData={setData} multiplier={multiplier}/>
      <Settings multiplier={multiplier} setMultiplier={setMultiplier}/>
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
