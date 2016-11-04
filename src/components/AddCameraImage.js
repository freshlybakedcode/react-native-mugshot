'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';

class AddCameraImage extends Component {
  takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data);
        this.props.returnToOrderList(data);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
          // orientation={Camera.constants.Orientation.landscapeRight}
          captureAudio={false}
        >
        <Text style={styles.capture} onPress={() => this.takePicture()}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: (Dimensions.get('window').height) - 400,
    width: (Dimensions.get('window').width) - 35
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 0
  }
});

export default AddCameraImage;
