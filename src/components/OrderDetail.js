import React from 'react';
import { View, Text, Image } from 'react-native';

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
