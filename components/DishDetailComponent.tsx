import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

export class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }

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
        const { dishId } = this.props.route.params;
        return this.renderDish(this.state.dishes[+dishId]);
    }
};
