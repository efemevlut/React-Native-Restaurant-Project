// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Favorites, Restaurants} from './pages';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="RestaurantPage"
        tabBarOptions={{
          tabStyle: {alignContent: 'center', justifyContent: 'center'},
        }}>
        <Tab.Screen name="FavoritePage" component={Favorites} />
        <Tab.Screen name="RestaurantPage" component={Restaurants} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
