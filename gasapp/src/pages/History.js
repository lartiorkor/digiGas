import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

import AppBar from '../components/AppBar';
import HistoryModal from '../components/HistoryModal';
import colors from '../theme/Colors';

const data = [
  {
    id: 1,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
  {
    id: 2,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
  {
    id: 3,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
  {
    id: 4,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
  {
    id: 5,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
  {
    id: 6,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
  {
    id: 7,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
  {
    id: 8,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
  {
    id: 9,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
  {
    id: 10,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
  {
    id: 11,
    date: 'Date: 22nd Aug',
    gasConcentration: 'Gas Concentration: 45',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={{color: 'black'}}>{item.date}</Text>
      <Text style={{color: 'black'}}>{item.gasConcentration}</Text>
    </View>
  );
};

const History = ({navigation}) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const hideModal = () => {
    setModalVisibility(false);
  };

  const openModal = () => {
    setModalVisibility(true);
  };

  const logout = async () => {
    auth().signOut();
    console.log('User signed out');
  };
  return (
    <View>
      <AppBar title="History" openModal={openModal} />
      <HistoryModal
        hideModal={hideModal}
        modalVisibility={modalVisibility}
        logout={logout}
        navigation={navigation}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    display: 'flex',
    flex: 1,
    padding: 35,
    justifyContent: 'center',
  },

  textContainer: {
    padding: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
});

export default History;
