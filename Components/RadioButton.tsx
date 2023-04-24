import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type Option = {
    label: string,
    value: number
}

type RadioButtonProps = {
    options: Option[],
    option: Option,
    setOption: (option: Option) => void,
    label?: string,
    icon?: any
}

const RadioButton = (props: RadioButtonProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.icon}>{props.icon}</View>
            <View style={styles.buttonContainer}>
            {props.options.map((item) => {
                return (
                    <Pressable
                        style={item.label == props.option.label ? styles.selected : styles.unselected}
                        onPress={() => props.setOption(item)}
                    >
                        <Text style={styles.option}>{item.label}</Text>
                    </Pressable>
                );
            })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    icon: {
        alignSelf: 'center'
    },
    label: {
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    option: {
        textAlign: 'center'
    },
    unselected: {
        backgroundColor: 'lightgray',
        margin: 5,
        padding: 10,
        borderRadius: 40,
        width: 80,
        height: 40,
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: 'lightgray',
        margin: 5,
        padding: 10,
        borderRadius: 40,
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderWidth: 2
    },
})

export default RadioButton