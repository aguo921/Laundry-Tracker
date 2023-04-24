import { FlatList } from 'react-native';
import React from 'react';
import LaundryItem from '../Models/LaundryItem';
import LaundryElement from './LaundryElement';

type LaundryListProps = {
    data: LaundryItem[],
    setData: (data: LaundryItem[]) => void,
    multiplier: number
}

const LaundryList = (props: LaundryListProps) => {
    const sortedLaundry = props.data.sort(
        (a, b) => (a.wears/a.maxWears < b.wears/b.maxWears) ? 1 : (a.wears/a.maxWears > b.wears/b.maxWears) ? -1 : 0
    )
    return (
    <FlatList
        data={props.data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <LaundryElement
            data={sortedLaundry}
            setData={props.setData}
            item={item}
            multiplier={props.multiplier}
        />}
    />
)}

export default LaundryList