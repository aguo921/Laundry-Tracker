import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import LaundryModal from './LaundryModal';
import AddButton from './AddButton';
import LaundryItem from '../Models/LaundryItem';
import LaundryList from './LaundryList';

type LaundryScreenProps = {
  data: LaundryItem[],
  setData: (data: LaundryItem[]) => void,
  multiplier: number
}

const LaundryScreen = (props: LaundryScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [maxWears, setMaxWears] = useState(1);
  const [wears, setWears] = useState(0);
  const [notes, setNotes] = useState("");

  function addLaundry() {
    const id = "id" + Math.random().toString(16).slice(2)

    props.setData([
        ...props.data, {
            id: id,
            name: name,
            description: description,
            maxWears: maxWears,
            wears: wears,
            notes: notes
        }
    ])
  }

  function openModal() {
    setModalVisible(true);
    setName("");
    setDescription("");
    setMaxWears(1);
    setWears(0);
    setNotes("");
  }

  return (
    <View>
      <View style={styles.innerContainer}>
        {props.data.length > 0 ? (
          <LaundryList data={props.data} setData={props.setData} multiplier={props.multiplier}/>
        ) : (
          <Text>Currently no laundry!</Text>
        )}
      </View>
      <AddButton onPress={openModal} />
     
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
        setNotes={setNotes}
        addLaundry={addLaundry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    margin: 15
  }
})

export default LaundryScreen;