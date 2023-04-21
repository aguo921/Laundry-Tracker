import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Entypo, AntDesign } from '@expo/vector-icons';

type NumberInputProps = {
    value: number,
    setValue: (x: number) => void,
    label?: string,
    vertical?: boolean,
    width?: number | string
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

  const width = props.width == undefined ? 'fit-content' : props.width

  return (
  <View style={{...styles.container, width: width}}>
    {props.label != undefined ? (
      <Text style={styles.label}>{props.label}</Text>  
    ) : undefined}
    
    { props.vertical == undefined ? (
      <View style={styles.horizontal}>
        <Pressable style={styles.button} onPress={subtract}>
          <Entypo name="minus" size={20} color="black" />
        </Pressable>

        <TextInput
          onChangeText={onChange}
          keyboardType="numeric"
          value={props.value as unknown as string}
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={add}>
          <Entypo name="plus" size={20} color="black" />
        </Pressable>
      </View>
    ) : (
      <View style={styles.vertical}>
        <Pressable style={styles.button} onPress={add}>
          <AntDesign name="caretup" size={24} color="black" />
        </Pressable>

        <TextInput
          onChangeText={onChange}
          keyboardType="numeric"
          value={props.value as unknown as string}
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={subtract}>
          <AntDesign name="caretdown" size={24} color="black" />
        </Pressable>
      </View>
    )}
  </View>
)}

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  horizontal: {
    flexDirection: 'row'
  },
  vertical: {
    flexDirection: 'column',
    alignItems: 'center'
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
    height: 40,
    marginHorizontal: 5
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default NumberInput