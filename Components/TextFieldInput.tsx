import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import React from 'react';

type TextFieldInputProps = {
    value: string,
    setValue: (x: string) => void,
    label: string,
}

const TextFieldInput = (props: TextFieldInputProps) => (
  <View style={styles.container}>
    <Text style={styles.label}>{props.label}</Text>    
    <TextInput
      onChangeText={props.setValue}
      value={props.value}
      style={styles.input}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    height: 46
  },
  input: {
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    height: '100%'
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default TextFieldInput