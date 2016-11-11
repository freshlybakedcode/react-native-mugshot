import React from 'react';
import { Text, Image, View, Platform } from 'react-native';

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
    backgroundColor: (Platform.OS === 'ios') ? '#ededed' : 'transparent',
    borderRadius: 100,
    borderColor: '#bcbcbc',
    borderWidth: 1,
    resizeMode: (Platform.OS === 'ios') ? 'contain' : 'cover'
  },
  optionStyle: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#222636'
  }
};

export default ImageOfCamera;
