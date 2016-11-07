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
    color: '#222636',
    fontSize: 9,
    marginTop: 8,
    fontWeight: 'bold'
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
      borderWidth: 6,
      borderColor: '#212535',
      borderRadius: 50,
      marginLeft: 30,
      marginRight: 30,
      height: 100,
      width: 100,
      justifyContent: 'center',
      overflow: 'hidden'
    },
    done: {
      borderWidth: 6,
      borderColor: '#212535',
      borderRadius: 50,
      marginLeft: 30,
      marginRight: 30,
      height: 100,
      width: 100,
      justifyContent: 'center',
      overflow: 'hidden'
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
    width: 30,
    height: 30
  },
  done: {
    width: 38,
    height: 30
  }

};
const buttonTextAvailableStyles = {
  add: {
    fontSize: 12
  },
  done: {
    fontSize: 12
  },
  settings: {
    marginTop: 5
  }
};

export default Button;
