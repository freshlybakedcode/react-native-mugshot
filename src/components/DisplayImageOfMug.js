import React from 'react';
import { Text, Image, View } from 'react-native';

const ImageOfCamera = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        style={styles.cameraImageStyle}
        source={{ uri: props.image }}
      />
      <Text style={styles.optionStyle}>Touch to retake Mugshot</Text>
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
    alignItems: 'center',
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 12
  }
};

export default ImageOfCamera;
