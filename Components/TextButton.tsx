import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

type TextButtonProps = {
    onPress: () => void,
    label: string,
    color?: string,
    width?: string | number
}


const TextButton = (props: TextButtonProps) => {
    const color = props.color == undefined ? "white" : props.color
    const width = props.width == undefined ? "100%" : props.width
    return (
        <Pressable style={{...styles.button, backgroundColor: color, width: width}} onPress={props.onPress}>
            <Text style={styles.text}>{props.label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        textAlign: 'center',
        padding: 10
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    }
})

export default TextButton