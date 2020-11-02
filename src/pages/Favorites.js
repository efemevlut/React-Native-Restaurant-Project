import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Favorites = (props) => {

  const favList = useSelector((state) => state.favoriteList);
  renderFavList = ({item}) => {
    return (
      <View style={{flexDirection: "row", marginLeft: 10}}>
        <Icon name={'gittip'} color={'tomato'} size={20} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={favList}
        ListHeaderComponent={() => (
          <Text style={styles.header}>Favori Restoranlar</Text>
        )}
        renderItem={renderFavList}
        ListEmptyComponent={() => (
          <Text style={styles.nothing}>Nothing on fav...</Text>
        )}
        // ItemSeparatorComponent={() => (
        //   <View style={{borderWidth: 0.5, borderColor: '#bdbdbd'}} />
        // )}
      />
    </View>
  );
};

export {Favorites};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 7,
    marginBottom: 10
  },
  nothing: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
});
