import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {RestaurantItem} from '../components';

const Restaurants = (props) => {
  const [list, setList] = useState([]);

  const fetchData = () => {
    axios
      .get(
        'https://opentable.herokuapp.com/api/restaurants?state=IL'
      )
      .then(response => setList(response.data.restaurants))
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchData(), []);

  const renderList = ({item}) => <RestaurantItem item={item} />;

  return (
    <View>
      <Text style={styles.text}>Restaurants</Text>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={renderList}
      />
    </View>
  );
};

export {Restaurants};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
