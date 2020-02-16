import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeNavigator } from './HomeNavigatorComponent';
import { DishMenuNavigator } from './DishMenuNavigatorComponent';

const MenuNavigator = createDrawerNavigator();

export class MainNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <MenuNavigator.Navigator initialRouteName='Home'>
          <MenuNavigator.Screen name='Home' component={HomeNavigator} options={{ title: 'Home' }} />
          <MenuNavigator.Screen name='Dish menu' component={DishMenuNavigator} options={{ title: 'Dish menu' }} />
        </MenuNavigator.Navigator>
      </NavigationContainer >
    );
  }
}
