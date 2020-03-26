import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('order summary will update');
    }
    render() {   
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
                        : {this.props.ingredients[igKey]}
                </li>);
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A burger with the following ingre</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Prices: </strong> {this.props.price.toFixed(2)}</p>
                <p>Continue to checkout ? </p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }

};

export default OrderSummary;