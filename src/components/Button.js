import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const Button = ({ onPress, buttonText, icon, buttonType }) => {
  const { textStyle, buttonImageStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Image style={buttonImageStyle} source={{ uri: icon }} />
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    width: 0,
    height: 50
  },
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
