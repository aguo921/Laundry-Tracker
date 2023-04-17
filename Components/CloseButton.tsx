import {
    StyleSheet,
    Text,
    Pressable,
} from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons'; 

type CloseButtonProps = {
    onPress: () => void
}

const CloseButton = (props: CloseButtonProps) => (
    <Pressable style={styles.button} onPress={props.onPress}>
        <Entypo name="circle-with-cross" size={36} color="red" />
    </Pressable>
)

const styles = StyleSheet.create({
    button: {
        float: 'right',
        position: 'absolute',
        right: 0,
        margin: 5
    }
})

export default CloseButton