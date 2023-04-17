import {
    Text,
    View,
    TextInput,
    Pressable,
    StyleSheet
} from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

// TODO: Vertical number input

type NumberInputProps = {
    value: number,
    setValue: (x: number) => void,
    label?: string,
    vertical?: boolean
}

const NumberInput = (props: NumberInputProps) => (
  <View style={styles.container}>
    {props.label != undefined ? (
      <Text style={styles.label}>{props.label}</Text>    
    ) : (
      undefined
    )}
    <Pressable
      style={styles.button}
      onPress={() => props.setValue(Math.max(0, props.value - 1))}
    >
      <Entypo name="minus" size={20} color="black" />
    </Pressable>
    <TextInput
      onChangeText={() => props.setValue(props.value)}
      keyboardType="numeric"
      value={props.value as unknown as string}
      style={styles.input}
    />
    <Pressable
      style={styles.button}
      onPress={() => props.setValue(props.value + 1)}
    >
      <Entypo name="plus" size={20} color="black" />
    </Pressable>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    height: 46
  },
  button: {
    alignSelf: 'center',
    margin: 5
  },
  input: {
    textAlign: 'center',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    width: 40,
    padding: 5,
    height: '100%'
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default NumberInput