import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DishMenu } from './DishMenuComponent';
import { DishDetail } from './DishDetailComponent';

const StackNavigator = createStackNavigator();

export class DishMenuNavigator extends Component {
    render() {
        return (
            <StackNavigator.Navigator initialRouteName='DishMenu' screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff',
                },
            }}>
                <StackNavigator.Screen name='DishMenu' component={DishMenu} options={{ title: 'Dish Menu' }} />
                <StackNavigator.Screen name='DishDetail' component={DishDetail} options={{ title: 'Dish detail' }} />
            </StackNavigator.Navigator>
        );
    }
}
