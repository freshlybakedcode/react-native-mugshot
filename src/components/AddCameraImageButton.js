import React, { Component } from 'react';
import {
  TouchableOpacity,
} from 'react-native';

import DisplayImageOfCamera from './DisplayImageOfCamera';
import DisplayImageOfMug from './DisplayImageOfMug';

class AddCameraImageButton extends Component {
  showCamera() {
    if (this.props.image !== null) {                //Delete the initial image taken
      this.props.deleteImage(this.props.image);
    }
    this.props.showCamera();
  }
  displayImage() {
    if (this.props.image === null) {
      return (
        <DisplayImageOfCamera />
      );
    } return (
      <DisplayImageOfMug image={this.props.image} />
    );
  }
  render() {
    const {
      cameraButtonStyle,
    } = styles;

    return (
      <TouchableOpacity
        style={cameraButtonStyle}
        onPress={() => this.showCamera()}
      >
        {this.displayImage()}
      </TouchableOpacity>
    );
  }
}

const styles = {
  cameraButtonStyle: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20
  }
};

export default AddCameraImageButton;
