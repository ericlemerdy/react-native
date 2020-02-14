import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';


export class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card
                    featuredTitle={dish.name}
                    image={require('./images/uthappizza.png')}>
                    <Text style={{ margin: 10 }}>
                        {dish.description}
                    </Text>
                </Card>
            );
        }
        else {
            return (<View></View>);
        }
    }

    render() {
        return this.renderDish(this.props.dish);
    }
};
