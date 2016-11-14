import React from 'react';
import { Text, Image, View } from 'react-native';

const NoOrders = () => {
  const {
    textStyleHeading,
    textStyleInstructions,
    backgroundImage,
    imageAligner,
    clearTextBackground
  } = styles;

  return (
    <View style={imageAligner}>
      <Image source={require('../images/stains.png')} style={backgroundImage}>
        <View style={clearTextBackground}>
          <Text style={textStyleHeading}>No orders!</Text>
          <Text style={textStyleInstructions}>touch 'ADD' to get started</Text>
          <Text style={textStyleInstructions}>swipe left to delete individual orders</Text>
          <Text style={textStyleInstructions}>touch 'CLEAR' to delete all orders</Text>
        </View>
      </Image>
    </View>
  );
};

const styles = {
  textStyleHeading: {
    fontSize: 22,
    color: '#222636',
    marginBottom: 15
  },
  textStyleInstructions: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222636',
    marginBottom: 5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  imageAligner: {
    alignItems: 'center',
    flex: 1
  },
  clearTextBackground: {
    flex: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  }
};
export default NoOrders;
