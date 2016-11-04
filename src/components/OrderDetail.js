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
      orderContainerStyle,
      orderTextStyle,
      orderListStyle,
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
            <Image style={thumbnailStyle} source={{ uri: this.state.image }} />
          </View>
          <View>
            <View style={individualOrderStyle}>
              <Text style={orderListStyle}>
                Drink
              </Text>
              <Text style={orderTextStyle}>
                {this.state.drink}
              </Text>
            </View>
            <View style={individualOrderStyle}>
              <Text style={orderListStyle}>
                Milk?
              </Text>
              <Text style={orderTextStyle}>
                {milkDisplay}
              </Text>
            </View>
            <View style={individualOrderStyle}>
              <Text style={orderListStyle}>
                Sugar
              </Text>
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
    position: 'relative',
    alignItems: 'center'
  },
  orderListStyle: {   //The drink/milk/sugar bit
    fontSize: 16,
    width: 60
  },
  orderTextStyle: {   //The Coffee/Yes/1 bit
    fontWeight: 'bold',
    fontSize: 18
  },
  individualOrderStyle: { //The wrapper around the orderList and orderText
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 7
  }
};

export default OrderDetail;
