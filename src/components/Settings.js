import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import Footer from './Footer';
import Button from './Button';

class Settings extends Component {

  handleButtonPress(button) {
    if (button === 'cancel') {
        const data = {
          headerText: 'Order list',
          currentView: 'orderList'
        };
        this.props.changeView(data);
    } else {
      return false;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Text>Settings</Text>
          </View>
          <View>
            <Text>Option:</Text>
            <Text>OPtion option topdk</Text>
          </View>
          <View>
            <Text>Optiopn</Text>
            <Text>Yes No</Text>
          </View>
          <View>
            <Text>Moar option</Text>
            <Text>Yup nope</Text>
          </View>
        </ScrollView>
        <Footer>
          <Button onPress={() => this.handleButtonPress('cancel')} buttonText={'CANCEL'} buttonType={'clear'} icon={'https://placehold.it/30x30'} />
        </Footer>
      </View>
    );
  }
}

export default Settings;
