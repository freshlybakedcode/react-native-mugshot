//Import library to create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import OrderList from './src/components/OrderList';
import Footer from './src/components/Footer';

//Create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Header headerText={'Order list:'} />
      </View>
      <OrderList />
      <Footer />
    </View>

  );
};

//Render component to device
AppRegistry.registerComponent('mugshot', () => App);
