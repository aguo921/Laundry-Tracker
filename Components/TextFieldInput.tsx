import { Text, View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

type TextFieldInputProps = {
    value: string,
    setValue: (x: string) => void,
    label?: string,
}

const TextFieldInput = (props: TextFieldInputProps) => (
  <View style={styles.container}>
    {props.label != undefined ? (
      <Text style={styles.label}>{props.label}</Text>    
    ) : undefined}
    
    <TextInput
      onChangeText={props.setValue}
      value={props.value}
      style={styles.input}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  input: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    height: 40
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default TextFieldInput