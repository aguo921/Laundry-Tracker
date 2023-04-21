import { StyleSheet, Text } from 'react-native';
import React from 'react';

type HeadlineProps = {
    content: string
}

const Headline = (props: HeadlineProps) => (
    <Text style={styles.headline}>{props.content}</Text>
)

const styles = StyleSheet.create({
    headline: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        borderBottomWidth: 1,
        backgroundColor: 'aliceblue'
    }
})

export default Headline