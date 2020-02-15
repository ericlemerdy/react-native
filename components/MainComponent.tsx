import React, { Component } from 'react';
import { Menu } from './MenuComponent';
import { DishDetail } from './DishDetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Menu' screenOptions={{
          headerStyle: {
            backgroundColor: '#512DA8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
          },
        }}>
          <Stack.Screen name='Menu' component={Menu} options={{ title: 'Menu' }} />
          <Stack.Screen name='DishDetail' component={DishDetail} options={{ title: 'Dish detail' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Main;