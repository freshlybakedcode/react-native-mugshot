import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const ButtonAdd = ({ onPress, buttonText, icon, buttonType }) => {
  const { textStyle, buttonImageStyle, buttonAddStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonAddStyle}>
      <Image style={buttonImageStyle} source={{ uri: icon }} />
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonAddStyle: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    paddingBottom: 10
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

export default ButtonAdd;
