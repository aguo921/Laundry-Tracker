import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import LaundryItem from '../Models/LaundryItem';
import LaundryModal from './LaundryModal';
import NumberInput from './NumberInput';
import { Entypo } from '@expo/vector-icons';

type LaundryElementProps = {
    data: LaundryItem[],
    setData: (data: LaundryItem[]) => void,
    item: LaundryItem,
    multiplier: number
}

const LaundryElement = (props: LaundryElementProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState(props.item.name);
    const [description, setDescription] = useState(props.item.description);
    const [maxWears, setMaxWears] = useState(props.item.maxWears);
    const [wears, setWears] = useState(props.item.wears)
    const [notes, setNotes] = useState(props.item.notes)

    function updateLaundry() {
      const updatedData = props.data.map(i => {
        if (i.id == props.item.id) {
          return {
            ...i,
            name: name,
            description: description,
            maxWears: maxWears,
            wears: wears,
            notes: notes
          }
        } else {
          return i
        }
      })
      props.setData(updatedData);
    }

    
    function deleteLaundry() {
      props.setData(props.data.filter(i => i.id != props.item.id))
    }

    function updateWears(value: number) {
      setWears(value);
      const updatedData = props.data.map(i => {
        if (i.id == props.item.id) {
          return {
            ...i,
            wears: value,
          }
        } else {
          return i
        }
      })
      props.setData(updatedData);
    };

    function openModal() {
      setModalVisible(true);
      setName(props.item.name);
      setDescription(props.item.description);
      setMaxWears(props.item.maxWears);
      setWears(props.item.wears);
      setNotes(props.item.notes);
    }
  
    return (
      
      <View style={styles.container}>
        <View style={styles.wearContainer}>
          <NumberInput value={wears} setValue={updateWears} multiplier={props.multiplier}/>
          <Text style={props.item.wears >= props.item.maxWears ? styles.fullWear : styles.wear}>
            {props.item.wears}/{props.item.maxWears} wears
          </Text>
        </View>

        <Pressable style={styles.info} onPress={openModal}>
          <Text style={styles.name}>
            {props.item.name}
          </Text>
          <Text style={styles.description}>
            {props.item.description}
          </Text>
        </Pressable>

        <Pressable style={styles.wash} onPress={() => updateWears(0)}>
          <Entypo name="water" size={24} color="black" />
        </Pressable>
        
        <LaundryModal
          modalVisible={modalVisible}
          name={name}
          description={description}
          maxWears={maxWears}
          wears={wears}
          notes={notes}
          setModalVisible={setModalVisible}
          setName={setName}
          setDescription={setDescription}
          setMaxWears={setMaxWears}
          setWears={setWears}
          updateLaundry={updateLaundry}
          deleteLaundry={deleteLaundry}
          setNotes={setNotes}
        />
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10
  },
  wearContainer: {
    flexDirection: 'column'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  info: {
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  description: {
    color: 'gray',
    fontSize: 16
  },
  fullWear: {
    color: 'red',
    fontSize: 16,
    alignSelf: 'center'
  },
  wear: {
    color: 'gray',
    fontSize: 16,
    alignSelf: 'center'
  },
  wash: {
    right: 0,
    position: 'absolute',
    alignSelf: 'center',
    margin: 5
  }
})

export default LaundryElement