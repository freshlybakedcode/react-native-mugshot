import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const Button = ({ onPress, buttonText, icon, buttonType, disabledStatus }) => {
  const buttonStyle = Object.assign({
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 35,
    paddingTop: 10,
    paddingBottom: 10,
    height: 70,
    width: 70,
  }, buttonStyle, buttonAvailableStyles[buttonType]);

  const buttonImageStyle = Object.assign({
    width: 24,
    height: 29
  }, buttonImageStyle, buttonImageAvailableStyles[buttonType]);

  const buttonTextStyle = Object.assign({
    alignSelf: 'center',
    color: '#333',
    fontSize: 9,
    marginTop: 10,
  }, buttonTextStyle, buttonTextAvailableStyles[buttonType]);

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} disabled={disabledStatus}>
      <Image style={buttonImageStyle} source={icon} />
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const buttonAvailableStyles = {
    clear: {
      // backgroundColor: 'red'
    },
    settings: {
      // backgroundColor: 'green'
    },
    add: {
      borderWidth: 2,
      borderColor: '#333',
      borderRadius: 50,
      marginLeft: 30,
      marginRight: 30,
      height: 100,
      width: 100,
      justifyContent: 'center'
    }
};
const buttonImageAvailableStyles = {
  add: {
    width: 53,
    height: 40
  },
  cancel: {
    width: 25,
    height: 16,
    marginTop: 10
  },
  settings: {
    width: 25,
    height: 25
  }

};
const buttonTextAvailableStyles = {
  add: {
    fontWeight: 'bold',
    fontSize: 12
  }
};

export default Button;
