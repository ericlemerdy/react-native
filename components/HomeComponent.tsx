import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS,
        }
    }

    renderItem(item) {
        if (item != null) {
            return (<Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={require('./images/uthappizza.png')}
            >
                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>);
        } else {
            return (<View></View>);
        }
    }

    render() {
        return (
            <ScrollView>
                {this.renderItem(this.state.dishes.filter((dish) => dish.featured)[0])}
                {this.renderItem(this.state.promotions.filter((promotion) => promotion.featured)[0])}
                {this.renderItem(this.state.leaders.filter((leaders) => leaders.featured)[0])}
            </ScrollView>
        );
    }
}
