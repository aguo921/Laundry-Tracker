import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import LaundryModal from './LaundryModal';
import LaundryElement from './LaundryElement';
import AddButton from './AddButton';
import LaundryItem from '../Models/LaundryItem';

type LaundryListProps = {
  data: LaundryItem[],
  setData: (data: LaundryItem[]) => void,
  headline: string
}

const LaundryList = (props: LaundryListProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Text style={styles.headline}>{props.headline}</Text>
      <AddButton
        onPress={() => {
          setModalVisible(true)
        }}
      />
      
      <FlatList
        data={props.data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <LaundryElement data={props.data} setData={props.setData} item={item} />}
        style={styles.list}
      />

      <LaundryModal
        data={props.data}
        setData={props.setData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    headline: {
      fontSize: 24,
      fontWeight: 'bold',
      padding: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      backgroundColor: 'aliceblue'
    },
    list: {
      padding: 10
    }
  });

export default LaundryList;