import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Pressable,
  FlatList
} from 'react-native';
import React, { useState } from 'react';

const AddLaundryModal = ({ modalVisible, setModalVisible }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [maxWears, setMaxWears] = useState(1);

  async function addLaundry() {

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
          <TextInput
            onChangeText={setName}
            placeholder="Name"
            value={name}
          />
          <TextInput
            onChangeText={setDescription}
            placeholder="Description"
            value={description}
          />
          <TextInput
            onChangeText={setMaxWears}
            placeholder="Maximum number of wears"
            keyboardType="numeric"
            value={maxWears}
          />
          <Pressable onPress={addLaundry}>
            <Text>Save laundry item</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const LaundryItem = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.wears}/{item.max_wears} wears</Text>
    </View>
  );
};

const LaundryList = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.item}
        data={data}
        keyExtractor={({id}) => id}
        renderItem={LaundryItem}
      />
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>+ Add laundry item</Text>
      </Pressable>
      <AddLaundryModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default LaundryList;