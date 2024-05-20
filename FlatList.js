import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const FlatLists = () => {
  const menuItemsToDisplay = [
    {name: 'Hummus', id: '1A'},
    {name: 'Moutabal', id: '2B'},
    {name: 'Falafel', id: '3C'},
    {name: 'Marinated Olives', id: '4D'},
    {name: 'Kofta', id: '5E'},
    {name: 'Eggplant Salad', id: '6F'},
    {name: 'Lentil Burger', id: '7G'},
    {name: 'Smoked Salmon', id: '8H'},
    {name: 'Kofta Burger', id: '9I'},
    {name: 'Turkish Kebab', id: '10J'},
    {name: 'Fries', id: '11K'},
    {name: 'Buttered Rice', id: '12L'},
    {name: 'Bread Sticks', id: '13M'},
    {name: 'Pita Pocket', id: '14N'},
    {name: 'Lentil Soup', id: '15O'},
    {name: 'Greek Salad', id: '16Q'},
    {name: 'Rice Pilaf', id: '17R'},
    {name: 'Baklava', id: '18S'},
    {name: 'Tartufo', id: '19T'},
    {name: 'Tartufo', id: '20U'},
    {name: 'Tiramisu', id: '21V'},
    {name: 'Panna Cotta', id: '22W'},
  ];

  const Item = ({name}) => {
    return (
      <View
        style={{
          backgroundColor: '#d3d3d3',
          height: 100,
          borderRadius: 30,
          marginTop: 10,
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, color: '#000'}}>{name}</Text>
      </View>
    );
  };
  const renderItem = ({item}) => <Item name={item.name} />;

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          color: '#000',
          marginTop: 20,
        }}>
        Menu
      </Text>
      <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FlatLists;

const styles = StyleSheet.create({});
