import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import LaundryScreen from './Components/LaundryScreen';
import SettingsScreen from './Components/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const defaultData = [{
    id: '1',
    name: 'Shirt',
    description: 'Red',
    maxWears: 5,
    wears: 1,
    notes: ""
  }
  ]
  const [data, setData] = useState(defaultData);
  const [multiplier, setMultiplier] = useState(1);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Laundry"
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name=="Laundry") {
              iconName = 'home'
            } else {
              iconName = 'setting'
            }

            return <AntDesign name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: 'lightgray'
        })}
      >
        <Tab.Screen name="Laundry">
          {(props) => <LaundryScreen {...props} data={data} setData={setData} multiplier={multiplier}/>}
        </Tab.Screen>

        <Tab.Screen name="Settings">
          {(props) => <SettingsScreen {...props} multiplier={multiplier} setMultiplier={setMultiplier}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
