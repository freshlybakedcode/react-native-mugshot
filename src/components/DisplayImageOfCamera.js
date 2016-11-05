import React from 'react';
import { Text, Image, View } from 'react-native';

const ImageOfCamera = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image style={styles.cameraImageStyle} source={require('../images/camera.png')} />
      <Text style={styles.optionStyle}>Touch to add Mugshot</Text>
    </View>
  );
};

const styles = {
  cameraImageStyle: {
    width: 200,
    height: 200,
    backgroundColor: '#ededed',
    borderRadius: 100,
    borderColor: '#dedede',
    borderWidth: 2,
    resizeMode: 'contain'
  },
  optionStyle: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 12
  }
};

export default ImageOfCamera;
