import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const Button = ({ onPress, buttonText, icon, buttonType, disabledStatus }) => {
  const { textStyle, buttonImageStyle } = styles;
  const buttonStyle = Object.assign({
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#007aff',
    paddingTop: 10,
    paddingBottom: 10,
    height: 60,
    width: 60
  }, buttonStyle, buttonAvailableStyles[buttonType]);

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} disabled={disabledStatus}>
      <Image style={buttonImageStyle} source={{ uri: icon }} />
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const buttonAvailableStyles = {
    clear: {
      backgroundColor: 'red'
    },
    settings: {
      backgroundColor: 'green'
    },
    add: {
      backgroundColor: '#fff',
      borderWidth: 3,
      borderColor: '#007aff',
      marginLeft: 20,
      marginRight: 20,
      height: 90,
      width: 90
    }
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 9
  },
  buttonImageStyle: {
    width: 25,
    height: 25
  }
};

export default Button;
