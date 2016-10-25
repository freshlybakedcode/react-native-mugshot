import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import OrderDetail from './OrderDetail';

class OrderList extends Component {

  // componentWillMount(currentOrder) {
  //   this.setState = {
  //     currentOrder
  //   };
  //   console.log('OrderList.js, componentWillMount currentOrder: ', currentOrder);
  // }

  // constructor(currentOrder) {
  //   super(currentOrder);
  //   this.state = {
  //     currentOrder
  //   };
  //   console.log('OrderList.js, this.state.currentOrder: ', this.state.currentOrder);
  // }

  // componentDidMount(currentOrder) {
  //   this.setState = {
  //     currentOrder
  //   };
  //
  //   console.log('OrderList.js, componentDidMount currentOrder: ', currentOrder);
  // }

  renderOrders() {
    console.log('OrderList.js, this.props.currentOrder:', this.props.currentOrder);
    if (this.props.currentOrder !== null) {
      return this.props.currentOrder.map(eachOrder =>
        <OrderDetail
          key={eachOrder.id}
          eachOrder={eachOrder}
        />
      );
    }
    console.log('No orders!');
  }

  render() {
    return (
      <ScrollView>
        {this.renderOrders()}
      </ScrollView>
    );
  }

}

export default OrderList;
