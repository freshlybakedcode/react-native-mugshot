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

  render() {
    const milkDisplay = (this.state.milk ? 'Yes' : 'No');
    const sugarDisplay = (this.state.sugar : 'None');

    const {
      thumbnailStyle,
      thumbnailContainerStyle,
      orderContainerStyle
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
            <Image style={thumbnailStyle} source={{ uri: this.state.image }} />
          </View>
          <View>
            <Text>Drink: {this.state.drink}</Text>
            <Text>Milk?: {milkDisplay}</Text>
            <Text>Sugar: {sugarDisplay}</Text>
          </View>
        </View>
      </Swipeout>
    );
  }
}

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    marginRight: 15,
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
    position: 'relative'
  }
};

export default OrderDetail;
