// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen'
import ShowImages from '../screens/ShowImages'

const Stack = createStackNavigator();

function Config() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ShowImages" component={ShowImages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Config;