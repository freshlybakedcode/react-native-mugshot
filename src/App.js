import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import RNFS from 'react-native-fs';

import Header from './components/Header';
import OrderList from './components/OrderList';
import Add from './components/Add';
import Settings from './components/Settings';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerText: 'Order list',
      currentView: 'addDrink',
      currentOrder: [],
      orderLength: 0
    };
    this.handleAddDrinkData = this.handleAddDrinkData.bind(this);
    this.handleDeleteDrinkData = this.handleDeleteDrinkData.bind(this);
    this.changeView = this.changeView.bind(this);
    this.clearOrders = this.clearOrders.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('currentOrder').then((currentOrderStr) => {
      const currentOrder = JSON.parse(currentOrderStr);
      if (currentOrder != null) {
        this.setState({ currentOrder });
      }
      // console.log(this.state);
    }).done();

    AsyncStorage.getItem('orderLength').then((orderLengthStr) => {
      const orderLength = JSON.parse(orderLengthStr);
      // console.log('on load, orderlength:', orderLength);
      if (orderLength != null) {
        this.setState({ orderLength });
      }
      // console.log('on load, this.state: ', this.state);
    }).done();
  }

  changeView(viewData) {
    this.setState({
      headerText: viewData.headerText,
      currentView: viewData.currentView
    });
  }

  handleAddDrinkData(drinkData) {
    // console.log('handleAddDrinkData, drinkData: ', drinkData);
    if (drinkData.drink === 0) {
      drinkData.drink = 'Coffee';
    } else {
      drinkData.drink = 'Tea';
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
    }, function afterUpdate() {
      // console.log('handleAddDrinkData this.state: ', this.state);
      this.saveDrinkData();
    });
  }

  saveDrinkData() {
    AsyncStorage.setItem('currentOrder', JSON.stringify(this.state.currentOrder));
    AsyncStorage.setItem('orderLength', JSON.stringify(this.state.orderLength));
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
          this.deleteImageFromDisk(arr[i].image); //Call the function to delete the actual file
          arr.splice(i, 1);
       }
    }
    this.setState({
      currentOrder: arr
    });
    this.saveDrinkData();
  }
  deleteImageFromDisk(file) {
    // console.log('Gonna try and delete ', file);
    return RNFS.unlink(file)
    .then(() => {
      console.log('FILE DELETED');
    })
    // `unlink` will throw an error, if the item to unlink does not exist
    .catch((err) => {
      console.log(err.message);
    });
  }

  clearOrders() {
    // Need to delete all the data from the user's disk before removing from state
    for (let i = 0; i < this.state.currentOrder.length; i++) {
      this.handleDeleteDrinkData(i);
    }
    this.setState({
      currentOrder: [],
      orderLength: 0
    }, function afterUpdate() {
      this.saveDrinkData();
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
            deleteImage={this.deleteImageFromDisk}
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
