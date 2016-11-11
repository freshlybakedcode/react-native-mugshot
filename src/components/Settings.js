import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

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
    const {
      centeredView,
      imageStyle,
      basicText,
    } = styles;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginLeft: 10, marginRight: 10 }}>
          <Text style={basicText}>The <Text style={{ fontWeight: 'bold' }}>pro version</Text> of Mugshot has a whole bunch of awesome settings:</Text>
          <Text style={basicText}>
            <Text style={{ fontStyle: 'italic' }}>- Custom drink configurations and titles{"\n"}</Text>
            <Text style={{ fontStyle: 'italic' }}>- Infinite adjustability for milkiness{"\n"}</Text>
            <Text style={{ fontStyle: 'italic' }}>- Fine tune sugar quantities{"\n"}</Text>
            <Text style={{ fontStyle: 'italic' }}>- Unlimited order numbers{"\n"}</Text>
            <Text style={{ fontStyle: 'italic' }}>- Left and right handed modes{"\n"}</Text>
            <Text style={{ fontStyle: 'italic' }}>- Available on both iOS and Android{"\n"}</Text>
            <Text style={{ fontStyle: 'italic' }}>- Astonish and delight your co-workers with your flawless tea rounds!</Text>
          </Text>
          <Text style={basicText}>all <Text style={{ fontWeight: 'bold' }}>COMING SOON!</Text></Text>
          <View style={centeredView}>
            <Image
              style={imageStyle}
              source={require('../images/camera_no_shadow.png')}
            />
          </View>
        </ScrollView>
        <Footer>
          <Button
            onPress={() => this.handleButtonPress('cancel')}
            buttonText={'BACK'} buttonType={'cancel'}
            icon={require('../images/back_arrow.png')}
          />
          <View style={{ width: 230 }} />
        </Footer>
      </View>
    );
  }
}
const styles = {
  imageStyle: {
    width: 300,
    height: 300
  },
  centeredView: {
    alignItems: 'center'
  },
  basicText: {
    fontSize: 16,
    marginTop: 10
  },
  bulletList: {
    alignItems: 'flex-start'
  }
};
export default Settings;
