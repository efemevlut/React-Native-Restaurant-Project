// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Favorites, Restaurants} from "./pages"

const Tab = createBottomTabNavigator()

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Restaurants" component={Restaurants} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;