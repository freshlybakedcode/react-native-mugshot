import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, Switch } from 'react-native';

class Add extends Component {

  state = {
    drink: null,
    milk: true,
    sugar: 0,
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
        sugar: this.state.sugar + 1
      });
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
      <ScrollView style={wrapperStyle}>
        <View>
          <TouchableOpacity style={cameraButtonStyle}>
            <Image style={cameraImageStyle} source={require('../images/camera.png')} />
            <Text style={optionStyle}>Add Mugshot</Text>
          </TouchableOpacity>
        </View>
        <View style={containerStyle}>
          <Text style={labelStyle}>Drink</Text>
          <Text style={optionStyle}>Coffee Tea</Text>
        </View>
        <View style={containerStyle}>
          <Text style={labelStyle}>Milk</Text>
          <Text style={optionStyle}>
            <Switch
              onValueChange={(value) => this.setState({ milk: value })}
              value={this.state.milk}
            />
          </Text>
        </View>
        <View style={containerStyle}>
          <Text style={labelStyle}>Sugar</Text>
          <View style={optionStyle}>
            <TouchableOpacity style={subtractSugarButton} onPress={() => this.handleSubtractSugar()}>
              <Text style={subtractSugarText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={addSugarButton} onPress={() => this.handleAddSugar()}>
              <Text style={addSugarText}>{this.state.sugar}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    flex: 1
  },
  containerStyle: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
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
