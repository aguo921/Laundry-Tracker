import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

type AddButtonProps = {
    onPress: () => void
}

const AddButton = (props: AddButtonProps) => (
    <Pressable style={styles.button} onPress={props.onPress}>
        <Entypo name="circle-with-plus" size={50} color="green" />
    </Pressable>
)

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center'
    }
})

export default AddButton