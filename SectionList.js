import {Pressable, SectionList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Fast Food',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Sweets',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
  {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf',
    ],
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
  },
];

const SectionLists = () => {
  const [showMenu, setShowMenu] = useState(false);
  const Item = ({name}) => {
    return (
      <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
        <Text style={{fontSize: 16}}>{name}</Text>
      </View>
    );
  };

  const renderItem = ({item}) => <Item name={item} />;
  const renderSectionHeader = ({section: {title}}) => {
    return (
      <View
        style={{
          backgroundColor: 'pink',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#000', fontSize: 20}}>{title}</Text>
      </View>
    );
  };
  const Separator = () => <View style={styles.menu_separator}></View>;
  const Footer = () => (
    <View style={styles.footer}>
      <Text style={{color: '#fff'}}>All Rights Reserved</Text>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      {!showMenu && (
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
      )}
      <Pressable
        style={styles.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}>
        <Text style={styles.buttonText}>{showMenu ? 'Home' : 'View Menu'}</Text>
      </Pressable>
      {showMenu && (
        <SectionList
          sections={menuItemsToDisplay}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
        />
      )}
    </View>
  );
};

export default SectionLists;

const styles = StyleSheet.create({
  menu_separator: {
    borderBottomWidth: 1,
    borderBlockColor: '#d3d3d3',
  },
  footer: {
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 60,
    backgroundColor: 'pink',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 12,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
  },
});
