import React from 'react';
import { View } from 'react-native';
import Button from './Button';

// const Footer = () => {
const Footer = React.createClass({
  handlePressAdd() {
    console.log('Add');
  },
  handlePressClear() {
    console.log('Clicked clear');
    console.log(this.state.currentOrder);
    this.setState({
      currentOrder: []
    });
    console.log(this.state.currentOrder);
  },
  handlePressSettings() {
    console.log('seTtings');
  },

  render() {
    const { footerStyle } = styles;

    return (
      <View style={footerStyle}>
        <Button onPress={this.handlePressClear} buttonText={'CLEAR'} buttonType={'clear'} icon={'https://placehold.it/30x30'} />
        <Button onPress={this.handlePressAdd} buttonText={'ADD'} buttonType={'add'} icon={'https://placehold.it/30x30'} />
        <Button onPress={this.handlePressSettings} buttonText={'SETTINGS'} buttonType={'settings'} icon={'https://placehold.it/30x30'} />
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
    height: 70,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 5
  }
};
export default Footer;
