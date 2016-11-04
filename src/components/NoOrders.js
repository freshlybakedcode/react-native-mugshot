import React from 'react';
import { Text, Image } from 'react-native';

const NoOrders = () => {
  const { textStyle, backgroundImage } = styles;
  return (
      <Image source={require('../images/stains.jpg')} style={backgroundImage}>
        <Text style={textStyle}>No orders!</Text>
        <Text style={textStyle}>Touch 'Add' to get started!</Text>
      </Image>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    alignItems: 'center',
    justifyContent: 'center',
  }
};
export default NoOrders;
