import React from 'react';
import { Text, Image, View } from 'react-native';

const ImageOfCamera = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        style={styles.cameraImageStyle}
        source={{ uri: props.image }}
      />
      <Text style={styles.optionStyle}>Retake Mugshot</Text>
    </View>
  );
};

const styles = {
  cameraImageStyle: {
    width: 200,
    height: 200,
    backgroundColor: '#007aff',
    borderRadius: 100,
    resizeMode: 'cover'
  },
  optionStyle: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default ImageOfCamera;
