import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import RadioButton from './RadioButton';
import TextButton from './TextButton';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';

type SettingsScreenProps = {
    multiplier: number,
    setMultiplier: (multiplier: number) => void
}

const SettingsScreen = (props: SettingsScreenProps) => {
    const activityOptions = [
        {label: "Low", value: 2/3},
        {label: "Medium", value: 1},
        {label: "High", value: 1.5}
    ]

    const weatherOptions = [
        {label: "Cold", value: 2/3},
        {label: "Warm", value: 1},
        {label: "Hot", value: 1.5}
    ]

    const dirtinessOptions = [
        {label: "Low", value: 2/3},
        {label: "Medium", value: 1},
        {label: "High", value: 1.5}
    ]

    const [activity, setActivity] = useState({label: "Medium", value: 1});
    const [weather, setWeather] = useState({label: "Warm", value: 1});
    const [dirtiness, setDirtiness] = useState({label: "Medium", value: 1});

    function updateMultiplier() {
        const multiplier = activity.value * weather.value * dirtiness.value;
        props.setMultiplier(multiplier);
    }

    function round(x: number) {
        return Math.round(x*100)/100
    }

    return (
        <View>
            <View style={styles.innerContainer}>
                <RadioButton
                    options={activityOptions}
                    option={activity}
                    setOption={setActivity}
                    label="Activity"
                    icon={<FontAwesome5 name="running" size={36} color="black" />}
                />
                <RadioButton
                    options={weatherOptions}
                    option={weather}
                    setOption={setWeather}
                    label="Weather"
                    icon={<Feather name="sun" size={36} color="black" />}
                />

                <RadioButton
                    options={dirtinessOptions}
                    option={dirtiness}
                    setOption={setDirtiness}
                    label="Dirtiness"
                    icon={<MaterialIcons name="dirty-lens" size={36} color="black" />}
                />
                
                <Text style={styles.multiplierLabel}>Wear Multiplier</Text>
                <Text style={styles.multiplier}>×{round(props.multiplier)}</Text>
            </View>

            <TextButton onPress={updateMultiplier} label="Save"/>
        </View>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        margin: 15
    },
    multiplierLabel: {
        marginTop: 10,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    multiplier: {
        fontSize: 30,
        alignSelf: 'center'
    }
})

export default SettingsScreen;