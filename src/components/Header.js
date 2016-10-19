//Import libs
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    paddingBottom: 15,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 16,
    color: '#333'
  }
};

//Make component available
export default Header;
