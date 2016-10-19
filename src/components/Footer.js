import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import ButtonAdd from './ButtonAdd';

// const Footer = () => {
const Footer = React.createClass({
  handlePress() {
    console.log('Clicky!');
  },

  render() {
    const { footerStyle } = styles;

    return (
      <View style={footerStyle}>
        <Button onPress={this.handlePress} buttonText={'CLEAR'} icon={'https://placehold.it/30x30'} />
        <ButtonAdd onPress={this.handlePress} buttonText={'ADD'} icon={'https://placehold.it/30x30'} />
        <Button onPress={this.handlePress} buttonText={'SETTINGS'} icon={'https://placehold.it/30x30'} />
      </View>
    );
  },
});

const styles = {
  footerStyle: {
    flex: 0,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#333',
    height: 80,
    paddingLeft: 60,
    paddingRight: 60
  }
};
export default Footer;
