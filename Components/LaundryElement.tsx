import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';
import React, { useState } from 'react';
import LaundryItem from '../Models/LaundryItem';
import LaundryModal from './LaundryModal';
import NumberInput from './NumberInput';
import { Entypo } from '@expo/vector-icons';

type LaundryElementProps = {
    data: LaundryItem[],
    setData: (data: LaundryItem[]) => void,
    item: LaundryItem
}

const LaundryElement = (props: LaundryElementProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [wears, setWears] = useState(props.item.wears);

    function onChange(value: number) {
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
    }
  
    return (
      
      <View style={styles.container}>
        <View style={styles.input}>
          <NumberInput
            value={wears}
            setValue={onChange}
            vertical
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{props.item.name}</Text>
          <Text style={styles.wear}>{props.item.wears}/{props.item.maxWears} wears</Text>
        </View>
        <Pressable onPress={openModal} style={styles.edit}>
          <Entypo name="edit" size={24} color="black" />
        </Pressable>
        <LaundryModal
          data={props.data}
          setData={props.setData}
          item={props.item}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  info: {
    alignSelf: 'center',
    marginHorizontal: 10
  },
  input: {
    alignSelf: 'center',
  },
  wear: {
    color: 'gray'
  },
  edit: {
    float: 'right',
    right: 0,
    position: 'absolute',
    alignSelf: 'center',
    margin: 5
  }
})

export default LaundryElement