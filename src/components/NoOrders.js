import React from 'react';
import { Text, Image, View } from 'react-native';

const NoOrders = () => {
  const { textStyle, backgroundImage, imageAligner, clearTextBackground } = styles;
  return (
    <View style={imageAligner}>
      <Image source={require('../images/stains.png')} style={backgroundImage}>
        <View style={clearTextBackground}>
          <Text style={textStyle}>No orders!</Text>
          <Text style={textStyle}>Touch 'Add' to get started</Text>
        </View>
      </Image>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // or 'stretch'
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
    paddingTop: 50
  }
};
export default NoOrders;
