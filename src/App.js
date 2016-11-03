//Import library to create component
import React, { Component, AsyncStorage } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import OrderList from './components/OrderList';
import Add from './components/Add';
import Settings from './components/Settings';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerText: 'Order list',
      currentView: 'orderList',
      currentOrder: [
        { id: 0, drink: 'coffee', milk: true, sugar: 1, image: 'https://placehold.it/50x50' },
        { id: 1, drink: 'tea', milk: false, sugar: 0, image: 'https://placehold.it/50x50' }
      ],
      orderLength: 2
    };
    this.handleAddDrinkData = this.handleAddDrinkData.bind(this);
    this.handleDeleteDrinkData = this.handleDeleteDrinkData.bind(this);
    this.changeView = this.changeView.bind(this);
    this.clearOrders = this.clearOrders.bind(this);
  }

  changeView(viewData) {
      this.setState({
        headerText: viewData.headerText,
        currentView: viewData.currentView
      });
  }

  handleAddDrinkData(drinkData) {
    console.log(drinkData);
    if (drinkData.drink === 0) {
      drinkData.drink = 'Coffee';
    } else {
      drinkData.drink = 'Tea';
    }
    if (drinkData.image.path === null) {
      drinkData.image.path = 'https://placehold.it/50x50';
    }
    this.setState({
      headerText: 'Order list',
      currentView: 'orderList',
      orderLength: this.state.orderLength + 1,
      currentOrder: [
        ...this.state.currentOrder,
        {
          id: this.state.orderLength,
          drink: drinkData.drink,
          milk: drinkData.milk,
          sugar: drinkData.sugar,
          image: drinkData.image.path
        }
      ]
    });
  }

  handleDeleteDrinkData(data) {
    console.log('Deleting ID: ', data);
    const arr = (this.state.currentOrder);
    const attr = 'id';
    let i = arr.length;
    while (i--) {
       if (arr[i]
        && arr[i].hasOwnProperty(attr)
        && (arr[i][attr] === data)) {
           arr.splice(i, 1);
       }
    }
    this.setState({
      currentOrder: arr
    });
  }

  clearOrders() {
    this.setState({
      currentOrder: [],
      orderLength: 0
    });
  }
  renderCurrentView() {
    switch (this.state.currentView) {
      case 'orderList':
        return (
          <OrderList
            currentOrder={this.state.currentOrder}
            changeView={this.changeView}
            clearOrders={this.clearOrders}
            deleteDrinkData={this.handleDeleteDrinkData}
          />
        );
      case 'addDrink':
        return (
          <Add
            receiveDrinkData={this.handleAddDrinkData}
            changeView={this.changeView}
          />
        );
      case 'settings':
        return (
          <Settings
            changeView={this.changeView}
          />
        );
      default:
        return false;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Header headerText={this.state.headerText} />
        </View>
        {this.renderCurrentView()}
      </View>
    );
  }
}


export default App;
