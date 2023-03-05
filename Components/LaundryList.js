import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Pressable,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';

const NumberInput = ({ value, setValue }) => (
  <View style={{flexDirection: 'row'}}>           
    <Pressable onPress={() => setValue(value - 1)}>
      <Text>-</Text>
    </Pressable>
    <TextInput
      onChangeText={setValue}
      keyboardType="numeric"
      value={value}
    />
    <Pressable onPress={() => setValue(value + 1)}>
      <Text>+</Text>
    </Pressable>
  </View>
)

const AddLaundryModal = ({ data, setData, modalVisible, setModalVisible }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [maxWears, setMaxWears] = useState(1);

  function addLaundry() {
    const id = "id" + Math.random().toString(16).slice(2)

    setData([
      ...data, {
        id: id,
        name: name,
        description: description,
        maxWears: maxWears,
        wears: 1,
      }
    ])
    setModalVisible(false);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <Modal
      animationType="fade"
      onRequestClose={closeModal}
      transparent
      visible={modalVisible}
    >
      <View>
        <View>
          <Pressable onPress={closeModal}>
            <Text>X</Text>
          </Pressable>
          <Text>Name</Text>
          <TextInput
            onChangeText={setName}
            value={name}
          />
          <Text>Description</Text>
          <TextInput
            onChangeText={setDescription}
            value={description}
          />
          <Text>Maximum Number of Wears</Text>
          <NumberInput
            value={maxWears}
            setValue={setMaxWears}
          />
          <Pressable onPress={addLaundry}>
            <Text>Add laundry item</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const LaundryItem = ({ data, setData, item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>{item.name}</Text>
      </Pressable>
      <Text>{item.wears}/{item.maxWears} wears</Text>
      <LaundryModal
        data={data}
        setData={setData}
        item={item}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  )
};

const LaundryModal = ({ data, setData, item, modalVisible, setModalVisible }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [maxWears, setMaxWears] = useState(item.maxWears);
  const [wears, setWears] = useState(item.wears);

  function updateLaundry() {
    const updatedData = data.map(i => {
      if (i.id == item.id) {
        return {
          ...i,
          name: name,
          description: description,
          maxWears: maxWears,
          wears: wears,
        }
      } else {
        return i
      }
    })
    setData(updatedData);
    setModalVisible(false);
  }

  function deleteLaundry() {
    setData(data.filter(i => i.id != item.id))
    setModalVisible(false);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <Modal
      animationType="fade"
      onRequestClose={closeModal}
      transparent
      visible={modalVisible}
    >
      <View>
        <View>
          <Pressable onPress={closeModal}>
            <Text>X</Text>
          </Pressable>
          <Text>Name</Text>
          <TextInput
            onChangeText={setName}
            value={name}
          />
          <Text>Description</Text>
          <TextInput
            onChangeText={setDescription}
            value={description}
          />
          <Text>Maximum Number of Wears</Text>
          <NumberInput
            value={maxWears}
            setValue={setMaxWears}
          />
          <Text>Current Number of Wears</Text>
          <NumberInput
            value={wears}
            setValue={setWears}
          />
          <Pressable onPress={updateLaundry}>
            <Text>Update laundry item</Text>
          </Pressable>
          <Pressable onPress={deleteLaundry}>
            <Text>Delete laundry item</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const LaundryList = ({ data, setData }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <LaundryItem data={data} setData={setData} item={item} />}
      />
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>+ Add laundry item</Text>
      </Pressable>
      <AddLaundryModal
        data={data}
        setData={setData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default LaundryList;