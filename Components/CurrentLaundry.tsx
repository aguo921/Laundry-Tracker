import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import LaundryModal from './LaundryModal';
import AddButton from './AddButton';
import LaundryItem from '../Models/LaundryItem';
import Headline from './Headline';
import LaundryList from './LaundryList';

type CurrentLaundryProps = {
  data: LaundryItem[],
  setData: (data: LaundryItem[]) => void
}

const CurrentLaundry = (props: CurrentLaundryProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [maxWears, setMaxWears] = useState(1);
  const [wears, setWears] = useState(0);

  function addLaundry() {
    const id = "id" + Math.random().toString(16).slice(2)

    props.setData([
        ...props.data, {
            id: id,
            name: name,
            description: description,
            maxWears: maxWears,
            wears: wears,
        }
    ])
  }

  function openModal() {
    setModalVisible(true);
    setName("");
    setDescription("");
    setMaxWears(1);
    setWears(0);
  }

  return (
    <View>
      <Headline content="Current Laundry" />
      <AddButton onPress={openModal} />
      <View style={styles.innerContainer}>
        {props.data.length > 0 ? (
          <LaundryList data={props.data} setData={props.setData} />
        ) : (
          <Text>Currently no laundry!</Text>
        )}
      </View>
     
      <LaundryModal
          modalVisible={modalVisible}
          name={name}
          description={description}
          maxWears={maxWears}
          wears={wears}
          setModalVisible={setModalVisible}
          setName={setName}
          setDescription={setDescription}
          setMaxWears={setMaxWears}
          setWears={setWears}
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

export default CurrentLaundry;