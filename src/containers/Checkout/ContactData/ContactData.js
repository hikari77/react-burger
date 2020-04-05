import React, { Component }from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)

        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customrer: {
                name: 'Max',
                address: {
                    street: '3324' ,
                    zopCode: '11354',
                    country: 'US'
                },
                email: 'test@tesg.com'
            }
        }
        axios.post('/orders.json', order)
        .then( res => {
            this.setState({ loading: false });
            this.props.history.push('/');
        })
        .catch( err => {
            this.setState({ loading: false })
        });


    }
    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                <input className={classes.Input} type="text" name="email" placeholder="Your email"/>
                <input className={classes.Input} type="text" name="street" placeholder=" street"/>
                <input className={classes.Input} type="text" name="postal" placeholder="postal code"/>
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>

        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;