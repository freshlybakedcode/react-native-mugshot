import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  SegmentedControlIOS
} from 'react-native';

import Footer from './Footer';
import Button from './Button';
import AddCameraImage from './AddCameraImage';
import AddCameraImageButton from './AddCameraImageButton';

const styleBackground = '#52586c';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      drink: 0,
      milk: true,
      sugar: 0,
      cameraActive: false,
      image: { path: null }
    };
    this.showHideCamera = this.showHideCamera.bind(this);
  }

  handleSubtractSugar() {
    if (this.state.sugar > 0) {
      this.setState({
        sugar: this.state.sugar - 1
      });
    }
  }

  handleAddSugar() {
    if (this.state.sugar < 100) {
      this.setState({
        sugar: ++this.state.sugar
      });
    }
  }

  sendDrinkData() {
    this.props.receiveDrinkData(this.state);
  }

  handleButtonPress(button) {
    if (button === 'cancel') {
        const data = {
          headerText: 'Order list',
          currentView: 'orderList'
        };
        this.props.changeView(data);
    } else {
      return false;
    }
  }

  showHideCamera(data) {
    this.setState({
      cameraActive: !this.state.cameraActive
    });
    if (data) {
      this.setState({
        image: data
      });
    }
  }

  renderCameraSection() {
    if (this.state.cameraActive) {
      return (
        <AddCameraImage returnToOrderList={this.showHideCamera} />
      );
    }
    return (
      <AddCameraImageButton
        showCamera={this.showHideCamera}
        image={this.state.image.path}
        deleteImage={this.props.deleteImage}
      />
    );
  }

  render() {
    const {
      optionStyle,
      labelStyle,
      containerStyle,
      wrapperStyle,
      addSugarButton,
      addSugarText,
      subtractSugarButton,
      subtractSugarText
    } = styles;

    return (
      <View style={{ flex: 1 }}>
      <ScrollView style={wrapperStyle}>
        <View>
          {this.renderCameraSection()}
        </View>
        <View style={containerStyle}>
          <Text style={labelStyle}>Drink:</Text>
          <SegmentedControlIOS
            tintColor={styleBackground}
            style={{ flex: 2 }}
            values={['Coffee', 'Tea']}
            selectedIndex={this.state.drink}
            onChange={(event) => {
              this.setState({ drink: event.nativeEvent.selectedSegmentIndex });
            }}
          />
          <View style={{ flex: 1 }} />
        </View>
        <View style={containerStyle}>
          <Text style={labelStyle}>Milk</Text>
          <View style={optionStyle}>
            <Switch
              onTintColor={styleBackground}
              onValueChange={(value) => this.setState({ milk: value })}
              value={this.state.milk}
            />
          </View>
        </View>
        <View style={containerStyle}>
          <Text style={labelStyle}>Sugar</Text>
          <View style={optionStyle}>
            <TouchableOpacity
              style={subtractSugarButton}
              onPress={() => this.handleSubtractSugar()}
            >
              <Text style={subtractSugarText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={addSugarButton}
              onPress={() => this.handleAddSugar()}
            >
              <Text style={addSugarText}>{this.state.sugar}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer>
        <Button
          onPress={() => this.handleButtonPress('cancel')}
          buttonText={'BACK'} buttonType={'cancel'}
          icon={require('../images/back_arrow.png')}
        />
        <Button
          onPress={() => this.sendDrinkData()}
          buttonText={'DONE'} buttonType={'done'}
          icon={require('../images/tick.png')}
          disabledStatus={this.state.cameraActive}
        />
        <View style={{ width: 70 }} />
      </Footer>
      </View>
    );
  }
}

const styles = {
  optionStyle: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    flex: 1,
    marginRight: 20
  },
  containerStyle: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  pickerContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 75
  },
  pickerStyle: {
    flex: 1,
    marginTop: -165,
    paddingTop: 0,
    top: 0,
    height: 50
  },
  wrapperStyle: {
    padding: 20
  },
  addSugarButton: {
    backgroundColor: styleBackground,
    width: 65,
    height: 65,
    borderRadius: 65,
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 1,
    // shadowRadius: 1
  },
  addSugarText: {
    color: 'white',
    fontSize: 22
  },
  subtractSugarButton: {
    backgroundColor: styleBackground,
    width: 38,
    height: 38,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 1,
    // shadowRadius: 1
  },
  subtractSugarText: {
    color: 'white',
    fontSize: 24,
    lineHeight: 14,
    marginTop: 11
  }
};

export default Add;
