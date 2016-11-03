import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import OrderDetail from './OrderDetail';
import Footer from './Footer';
import Button from './Button';

class OrderList extends Component {

  handleButtonPress(button) {
    if (button === 'add') {
        const data = {
          headerText: 'Add a drink',
          currentView: 'addDrink'
        };
        this.props.changeView(data);
    } else if (button === 'clear') {
      this.props.clearOrders();
    } else if (button === 'settings') {
        const data = {
          headerText: 'Settings',
          currentView: 'settings'
        };
        this.props.changeView(data);
    } else {
      return false;
    }
  }

  renderOrders() {
    console.log('OrderList.js, this.props.currentOrder:', this.props.currentOrder);
    if (this.props.currentOrder !== null) {
      return this.props.currentOrder.map(eachOrder =>
        <OrderDetail
          key={eachOrder.id}
          eachOrder={eachOrder}
          deleteDrinkData={this.props.deleteDrinkData}
        />
      );
    }
    console.log('No orders!');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this.renderOrders()}
        </ScrollView>
        <Footer>
          <Button onPress={() => this.handleButtonPress('clear')} buttonText={'CLEAR'} buttonType={'clear'} icon={'https://placehold.it/30x30'} />
          <Button onPress={() => this.handleButtonPress('add')} buttonText={'ADD'} buttonType={'add'} icon={'https://placehold.it/30x30'} />
          <Button onPress={() => this.handleButtonPress('settings')} buttonText={'SETTINGS'} buttonType={'settings'} icon={'https://placehold.it/30x30'} />
        </Footer>
      </View>
    );
  }

}

export default OrderList;
