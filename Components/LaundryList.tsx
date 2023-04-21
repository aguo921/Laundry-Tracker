import { FlatList } from 'react-native';
import React from 'react';
import LaundryItem from '../Models/LaundryItem';
import LaundryElement from './LaundryElement';

type LaundryListProps = {
    data: LaundryItem[],
    setData: (data: LaundryItem[]) => void
}

const LaundryList = (props: LaundryListProps) => (
    <FlatList
        data={props.data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <LaundryElement data={props.data} setData={props.setData} item={item} />}
    />
)

export default LaundryList