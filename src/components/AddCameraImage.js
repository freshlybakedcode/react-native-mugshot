'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Camera, { constants } from 'react-native-camera';

class AddCameraImage extends Component {
  takePicture() {
    this.camera.capture()
      .then((data) => {
        // console.log(data);
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
          aspect={constants.Aspect.fill}
          captureTarget={constants.CaptureTarget.disk}
          // orientation={Camera.constants.Orientation.landscapeRight}
          captureAudio={false}
        >
        {/* <Text style={styles.capture} onPress={() => this.takePicture()}>[CAPTURE]</Text> */}
          <TouchableOpacity
            style={styles.captureButtonOuter}
            onPress={() => this.takePicture()}
          >
            <TouchableOpacity
              style={styles.captureButtonInner}
              onPress={() => this.takePicture()}
            />
          </TouchableOpacity>
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
  },
  captureButtonOuter: {
    flex: 0,
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 70,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  captureButtonInner: {
    flex: 0,
    backgroundColor: '#eee',
    width: 56,
    height: 56,
    borderRadius: 56,
    borderWidth: 2,
    borderColor: '#333'
  }
});

export default AddCameraImage;
