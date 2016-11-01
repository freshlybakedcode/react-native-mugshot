import React from 'react';
import { Text, Image, View } from 'react-native';

const ImageOfCamera = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image style={styles.cameraImageStyle} source={require('../images/camera.png')} />
      <Text style={styles.optionStyle}>Add Mugshot</Text>
    </View>
  );
};

const styles = {
  cameraImageStyle: {
    width: 200,
    height: 200,
    backgroundColor: '#007aff',
    borderRadius: 100,
    resizeMode: 'contain'
  },
  optionStyle: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default ImageOfCamera;
