import {
    Text,
    View,
    TextInput,
    Pressable,
    StyleSheet
} from 'react-native';
import React from 'react';
import { Entypo, AntDesign } from '@expo/vector-icons';

type NumberInputProps = {
    value: number,
    setValue: (x: number) => void,
    label?: string,
    vertical?: void
}

const NumberInput = (props: NumberInputProps) => {
  function subtract() {
    props.setValue(Math.max(0, props.value - 1))
  }

  function add() {
    props.setValue(props.value + 1)
  }

  function onChange(value: string) {
    if (!isNaN(+value)) {
      props.setValue(Number(value))
    }
  }

  return (
  <View style={props.vertical == undefined ? styles.container : styles.containerVertical}>
    {props.label != undefined ? (
      <Text style={styles.label}>{props.label}</Text>    
    ) : (
      undefined
    )}
    { props.vertical == undefined ? (
      <Pressable
        style={styles.button}
        onPress={subtract}
      >
        <Entypo name="minus" size={20} color="black" />
      </Pressable>
    ) : (
      <Pressable
      style={styles.button}
      onPress={add}
      >
        <AntDesign name="caretup" size={24} color="black" />
      </Pressable>
    )}
    <TextInput
      onChangeText={onChange}
      keyboardType="numeric"
      value={props.value as unknown as string}
      style={styles.input}
    />

    { props.vertical == undefined ? (
      <Pressable
        style={styles.button}
        onPress={add}
      >
        <Entypo name="plus" size={20} color="black" />
      </Pressable>
    ) : (
      <Pressable
        style={styles.button}
        onPress={subtract}
      >
        <AntDesign name="caretdown" size={24} color="black" />
      </Pressable>
    )}

  </View>
)}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    height: 46
  },
  containerVertical: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10
  },
  button: {
    alignSelf: 'center'
  },
  input: {
    textAlign: 'center',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    width: 40,
    padding: 5,
    height: '100%',
    marginHorizontal: 5
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default NumberInput