import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
  SegmentedControlIOS
} from 'react-native';

import Footer from './Footer';
import Button from './Button';

class Add extends Component {

  state = {
    drink: 0,
    milk: true,
    sugar: 0
  };

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

  render() {
    const {
      cameraButtonStyle,
      cameraImageStyle,
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
          <TouchableOpacity style={cameraButtonStyle}>
            <Image style={cameraImageStyle} source={require('../images/camera.png')} />
            <Text style={optionStyle}>Add Mugshot</Text>
          </TouchableOpacity>
        </View>
        <View style={containerStyle}>
          <Text style={labelStyle}>Drink:</Text>
          <SegmentedControlIOS
            style={{ flex: 2 }}
            values={['Coffee', 'Tea']}
            selectedIndex={this.state.drink}
            onChange={(event) => {
              this.setState({ drink: event.nativeEvent.selectedSegmentIndex });
            }}
          />
        </View>
        <View style={containerStyle}>
          <Text style={labelStyle}>Milk</Text>
          <View style={optionStyle}>
            <Switch
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
        <Button onPress={() => this.handleButtonPress('cancel')} buttonText={'CANCEL'} buttonType={'clear'} icon={'https://placehold.it/30x30'} />
        <Button onPress={() => this.sendDrinkData()} buttonText={'SAVE!'} buttonType={'add'} icon={'https://placehold.it/30x30'} />
      </Footer>
      </View>
    );
  }
}

const styles = {
  cameraButtonStyle: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20
  },
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
  },
  labelStyle: {
    flex: 1,
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
    backgroundColor: '#007aff',
    width: 45,
    height: 45,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addSugarText: {
    color: 'white',
    fontSize: 20
  },
  subtractSugarButton: {
    backgroundColor: '#007aff',
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 6,
    borderColor: 'white'
  },
  subtractSugarText: {
    color: 'white',
    fontSize: 24,
    lineHeight: 14,
    marginTop: 11
  },
};

export default Add;
