import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './HomeComponent';

const StackNavigator = createStackNavigator();

export class HomeNavigator extends Component {
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
                <StackNavigator.Screen name='Home' component={Home} options={{ title:'Home' }} />
            </StackNavigator.Navigator>
        );
    }
}
