import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Swipeout from 'react-native-swipeout';

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: props.eachOrder.drink,
      milk: props.eachOrder.milk,
      sugar: props.eachOrder.sugar,
      id: props.eachOrder.id,
      image: props.eachOrder.image
    };
  }

  insertImage() {
    if (this.state.image === null) {
      return (
        <Image style={{ width: 130, height: 130 }} source={require('../images/generic_cup.png')} />
      );
    }
    return (
      <Image style={{ width: 130, height: 130 }} source={{ uri: this.state.image }} />
    );
  }

  render() {
    const milkDisplay = (this.state.milk ? 'With milk' : 'Without milk');
    let sugarDisplay = '';

    if (this.state.sugar === 0) {
      sugarDisplay = 'No sugar';
    } else if (this.state.sugar === 1) {
      sugarDisplay = '1 sugar';
    } else if (this.state.sugar > 1) {
      sugarDisplay = this.state.sugar + ' sugars';
    }

    const {
      thumbnailContainerStyle,
      orderContainerStyle,
      orderTextStyle,
      orderTextStyleDrink,
      individualOrderStyle
    } = styles;

    const swipeoutBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      onPress: () => {
        // console.log('Deleting', eachOrder.id);
        this.props.deleteDrinkData(this.state.id);
      }
    }];

    return (
      <Swipeout right={swipeoutBtns} autoClose>
        <View style={orderContainerStyle}>
          <View style={thumbnailContainerStyle}>
            {this.insertImage()}
          </View>
          <View>
            <View style={individualOrderStyle}>
              <Text style={orderTextStyleDrink}>
                {this.state.drink.toUpperCase()}
              </Text>
            </View>
            <View style={individualOrderStyle}>
              <Text style={orderTextStyle}>
                {milkDisplay}
              </Text>
            </View>
            <View style={individualOrderStyle}>
              <Text style={orderTextStyle}>
                {sugarDisplay}
              </Text>
            </View>
          </View>
        </View>
      </Swipeout>
    );
  }
}

const styles = {
  thumbnailStyle: {
    height: 130,
    width: 130
  },
  thumbnailContainerStyle: {
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orderContainerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center'
  },
  orderTextStyleDrink: {  //Drink specific (larger)
    fontSize: 22,
    color: '#222636',
    // fontWeight: 'bold',
    marginBottom: 7
  },
  orderTextStyle: {   //The with milk/sugar bit
    fontWeight: 'bold',
    fontSize: 14,
    color: '#222636',
    marginTop: -5
  },
  individualOrderStyle: { //The wrapper around the orderList and orderText
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 7
  }
};

export default OrderDetail;
