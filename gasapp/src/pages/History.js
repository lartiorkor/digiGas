import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native';

import colors from '../theme/Colors'

const data = [
    {
        id: 1,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
    {
        id: 2,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
    {
        id: 3,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
    {
        id: 4,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
    {
        id: 5,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
    {
        id: 6,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
    {
        id: 7,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
    {
        id: 8,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
    {
        id: 9,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
    {
        id: 10,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
    {
        id: 11,
        date: "Date: 22nd Aug",
        gasConcentration: "Gas Concentration: 45"
    },
]

const renderItem = ({item}) => {
    return(
        <View style={styles.textContainer}>
            <Text>{item.date}</Text>
            <Text>{item.gasConcentration}</Text>
        </View>
    )
}

const History = () => {
    return (
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      );
}

const styles=StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      display: 'flex',
      flex: 1,
      padding: 35,
      justifyContent: 'center' 
    },

    textContainer: {
        padding: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 15,
    }
})

export default History;
