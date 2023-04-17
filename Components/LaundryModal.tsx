import {
    StyleSheet,
    Text,
    View,
    Modal,
} from 'react-native';
import React, { useState } from 'react';
import NumberInput from './NumberInput';
import TextFieldInput from './TextFieldInput';
import LaundryItem from '../Models/LaundryItem';
import CloseButton from './CloseButton';
import TextButton from './TextButton';


// TODO: Fix resetting of fields when opening the modal again

type LaundryModalProps = {
    data: LaundryItem[],
    setData: (data: LaundryItem[]) => void,
    item?: LaundryItem,
    modalVisible: boolean,
    setModalVisible: (x: boolean) => void
}

const LaundryModal = (props: LaundryModalProps) => {
    const [name, setName] = useState(props.item == undefined ? '' : props.item.name);
    const [description, setDescription] = useState(props.item == undefined ? '' : props.item.description);
    const [maxWears, setMaxWears] = useState(props.item == undefined ? 1 : props.item.maxWears);
    const [wears, setWears] = useState(props.item == undefined ? 1 : props.item.wears)
    const [error, setError] = useState(false)

    function addLaundry() {
      if (name == "") {
        setError(true)
      } else {
        const id = "id" + Math.random().toString(16).slice(2)

        props.setData([
            ...props.data, {
                id: id,
                name: name,
                description: description,
                maxWears: maxWears,
                wears: 1,
            }
        ])
        closeModal();
      }
    }

    function updateLaundry() {
      if (props.item != undefined) {
        if (name == "") {
          setError(true)
        } else {
          const updatedData = props.data.map(i => {
            if (i.id == props.item.id) {
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
          props.setData(updatedData);
          closeModal();
        }
      }
    }

    function deleteLaundry() {
      if (props.item != undefined) {
        props.setData(props.data.filter(i => i.id != props.item.id))
        closeModal();
      }
    }
  
    function closeModal() {
      props.setModalVisible(false);
      setName("");
      setDescription("");
      setMaxWears(1);
      setWears(1);
      setError(false);
    }
  
    return (
      <Modal
        animationType="fade"
        onRequestClose={closeModal}
        visible={props.modalVisible}
      >
        <View style={styles.container}>
          { props.item == undefined ? (
            <Text style={styles.headline}>Add Laundry Item</Text>
          ) : (
            <Text style={styles.headline}>Update Laundry Item</Text>
          )}
          <CloseButton onPress={closeModal} />

          <View style={styles.innerContainer}>
          { error == true ? (
            <Text style={styles.error}>Name is required.</Text>
          ) : (
            undefined
          )}

            <TextFieldInput
              value={name}
              setValue={setName}
              label="Name"
            />

            <TextFieldInput
              value={description}
              setValue={setDescription}
              label="Description"
            />

            <NumberInput
              value={maxWears}
              setValue={setMaxWears}
              label="Maximum Wears"
            />

            <NumberInput
              value={wears}
              setValue={setWears}
              label="Current Wears"
            />
            </View>

            { props.item == undefined ? (
              <View style={styles.bottomBar}>
                <TextButton 
                  onPress={addLaundry}
                  label="Add"
                  color="green"
                />
              </View>
            ) : (
                <View style={styles.bottomBar}>
                  <TextButton
                    onPress={updateLaundry}
                    label="Update"
                    color="green"
                    width="50%"
                  />
                  <TextButton
                    onPress={deleteLaundry}
                    label="Delete"
                    color="red"
                    width="50%"
                  />
                </View>
            )}
          </View>
      </Modal>
    )
  }

const styles = StyleSheet.create({
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: 'aliceblue'
  },
  bottomBar: {
    marginTop: 10,
    flexDirection: 'row',
  },
  error: {
    color: 'red',
  },
  container: {
    flex: 1
  },
  innerContainer: {
    padding: 10
  }
})
  
export default LaundryModal