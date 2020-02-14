import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export class Menu extends Component {
    render() {
        const renderMenuItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    chevron={false}
                    onPress={() => this.props.onPress(item.id)}
                    leftAvatar={{ source: require('./images/uthappizza.png') }}
                />
            );
        };
        return (
            <FlatList
                data={this.props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
};
