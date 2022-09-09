import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../theme/Colors';

const AppBar = ({title, openModal}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primary,
        padding: 16,
      }}>
      <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
        {title}
      </Text>
      <Ionicons
        name="ellipsis-vertical"
        size={27}
        color="white"
        onPress={openModal}
      />
    </View>
  );
};

export default AppBar;
