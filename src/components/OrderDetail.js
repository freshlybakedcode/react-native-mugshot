import React from 'react';
import { View, Text, Image } from 'react-native';
import Swipeout from 'react-native-swipeout';
// var Swipeout = require('react-native-swipeout');

// Buttons
const swipeoutBtns = [
  {
    text: 'Delete',
    backgroundColor: 'red',
    onPress: () => {
      //this.deleteNote(rowData)
      console.log('Deleting', this);
    }
  }
];
const OrderDetail = ({ eachOrder }) => {
  const { drink, milk, sugar, image } = eachOrder;
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    orderContainerStyle
  } = styles;

  const milkDisplay = (milk ? 'Yes' : 'No');
  const sugarDisplay = (sugar : 'None');

  return (
    <Swipeout right={swipeoutBtns}>
      <View style={orderContainerStyle}>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: image }} />
        </View>
        <View>
          <Text>Drink: {drink}</Text>
          <Text>Milk?: {milkDisplay}</Text>
          <Text>Sugar: {sugarDisplay}</Text>
        </View>
      </View>
    </Swipeout>
  );
};

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orderContainerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default OrderDetail;
