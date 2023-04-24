import { StyleSheet, Text, View, Modal } from 'react-native';
import React, { useState } from 'react';
import NumberInput from './NumberInput';
import TextFieldInput from './TextFieldInput';
import CloseButton from './CloseButton';
import TextButton from './TextButton';
import Headline from './Headline';

type LaundryModalProps = {
    modalVisible: boolean,
    name: string,
    description: string,
    maxWears: number,
    wears: number,
    setModalVisible: (modalVisible: boolean) => void,
    setName: (name: string) => void,
    setDescription: (description: string) => void,
    setMaxWears: (maxWears: number) => void,
    setWears: (wears: number) => void,
    addLaundry?: () => void,
    updateLaundry?: () => void,
    deleteLaundry?: () => void
}

const LaundryModal = (props: LaundryModalProps) => {
    const [error, setError] = useState(false)

    function addLaundry() {
      if (props.name == "") {
        setError(true)
      } else {
        if (props.addLaundry != undefined) {
          props.addLaundry();
        }
        closeModal();
      }
    }

    function updateLaundry() {
      if (props.name == "") {
        setError(true)
      } else {
        if (props.updateLaundry != undefined) {
          props.updateLaundry()
        }
        closeModal();
      }
    }

    function deleteLaundry() {
      if (props.deleteLaundry != undefined) {
        props.deleteLaundry();
      }
      closeModal();
    }
  
    function closeModal() {
      props.setModalVisible(false);
      setError(false);
    }
  
    return (
      <Modal
        animationType="fade"
        onRequestClose={closeModal}
        visible={props.modalVisible}
      >
        <View style={styles.container}>
          <Headline content={props.addLaundry != undefined ? "Add Laundry Item" : "Update Laundry Item"} />
          <CloseButton onPress={closeModal} />

          <View style={styles.innerContainer}>
            <Text style={styles.error}>{error ? "Name is required" : undefined}</Text>

            <TextFieldInput
              value={props.name}
              setValue={props.setName}
              label="Name"
            />

            <TextFieldInput
              value={props.description}
              setValue={props.setDescription}
              label="Description"
            />

            <View style={styles.numberInputContainer}>
              <NumberInput
                value={props.maxWears}
                setValue={props.setMaxWears}
                label="Maximum Wears"
                width="50%"
              />

              <NumberInput
                value={props.wears}
                setValue={props.setWears}
                label="Current Wears"
                width="50%"
              />
            </View>
          </View>

          { props.addLaundry != undefined ? (
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
  bottomBar: {
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
  },
  numberInputContainer: {
    flexDirection: 'row'
  }
})
  
export default LaundryModal