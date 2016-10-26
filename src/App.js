//Import library to create component
import React, { Component, AsyncStorage } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import OrderList from './components/OrderList';
import Footer from './components/Footer';
import Button from './components/Button';
import Add from './components/Add';
import Settings from './components/Settings';

class App extends Component {

  state = {
    headerText: 'Order list',
    currentView: 'addDrink',
    currentOrder: [
      { id: 0, drink: 'coffee', milk: true, sugar: 1, image: 'https://placehold.it/50x50' },
      { id: 1, drink: 'tea', milk: false, sugar: 0, image: 'https://placehold.it/50x50' }
    ],
    orderLength: 2
  };

  handlePressAdd() {
    this.setState({
      headerText: 'Add a drink',
      currentView: 'addDrink'
    });
  }

  handlePressAddThisDrink() {
    console.log(this.state);
    this.setState({
      headerText: 'Order list',
      currentView: 'orderList',
      orderLength: this.state.orderLength + 1,
      currentOrder: [
        ...this.state.currentOrder,
        {
          id: this.state.orderLength,
          drink: 'sweet coffee',
          milk: true,
          sugar: 4,
          image: 'https://placehold.it/50x50'
        }
      ]
    });
  }

  handlePressClear() {
    this.setState({
      currentOrder: [],
      orderLength: 0
    });
  }

  handlePressSettings() {
    console.log('seTtings');
    this.setState({
      headerText: 'Settings',
      currentView: 'settings'
    });
  }

  handlePressBack() {
    this.setState({
      headerText: 'Order list',
      currentView: 'orderList'
    });
  }

  renderCurrentView() {
    switch (this.state.currentView) {
      case 'orderList':
        return (
          <OrderList currentOrder={this.state.currentOrder} />
        );
      case 'addDrink':
        return (
          <Add />
        );
      case 'settings':
        return (
          <Settings />
        );
      default:
        return false;
    }
  }

  renderFooter() {
    switch (this.state.currentView) {
      case 'orderList':
      return (
        <Footer>
          <Button onPress={() => this.handlePressClear()} buttonText={'CLEAR'} buttonType={'clear'} icon={'https://placehold.it/30x30'} />
          <Button onPress={() => this.handlePressAdd()} buttonText={'ADD'} buttonType={'add'} icon={'https://placehold.it/30x30'} />
          <Button onPress={() => this.handlePressSettings()} buttonText={'SETTINGS'} buttonType={'settings'} icon={'https://placehold.it/30x30'} />
        </Footer>
      );
      case 'addDrink':
      return (
        <Footer>
          <Button onPress={() => this.handlePressBack()} buttonText={'CANCEL'} buttonType={'clear'} icon={'https://placehold.it/30x30'} />
          <Button onPress={() => this.handlePressAddThisDrink()} buttonText={'SAVE!'} buttonType={'add'} icon={'https://placehold.it/30x30'} />
        </Footer>
      );
      case 'settings':
      return (
        <Footer>
          <Button onPress={() => this.handlePressBack()} buttonText={'BACK'} buttonType={'clear'} icon={'https://placehold.it/30x30'} />
        </Footer>
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
        {this.renderFooter()}
      </View>
    );
  }
}


export default App;
