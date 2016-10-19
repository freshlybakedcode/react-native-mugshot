import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import OrderDetail from './OrderDetail';

class OrderList extends Component {

  state = { currentOrder: [
    { id: 1, drink: 'coffee', milk: true, sugar: 1, image: 'https://placehold.it/50x50' },
    { id: 2, drink: 'tea', milk: false, sugar: 0, image: 'https://placehold.it/50x50' }]
  };

  componentWillMount() {
    //Get data from localStorage
  }

  renderOrders() {
    return this.state.currentOrder.map(eachOrder =>
      <OrderDetail key={eachOrder.id} eachOrder={eachOrder} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderOrders()}
      </ScrollView>
    );
  }
}

export default OrderList;
