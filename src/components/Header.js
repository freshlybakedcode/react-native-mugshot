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
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
    marginBottom: 5
  },
  textStyle: {
    fontSize: 16,
    color: '#222636'
  }
};

//Make component available
export default Header;
