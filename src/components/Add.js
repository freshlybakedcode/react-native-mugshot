import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';


const Add = () => {
  const { buttonStyle } = styles;
    return (
      <ScrollView>
        <View>
          <Text>Camera icon</Text>
        </View>
        <View>
          <Text>Drink:</Text>
          <Text>OPtion option topdk</Text>
        </View>
        <View>
          <Text>Milk</Text>
          <Text>Yes No</Text>
        </View>
        <View>
          <Text>Sugar</Text>
          <Text>Yup nope</Text>
        </View>
      </ScrollView>
    );
};

const styles = {
  buttonStyle: {
    width: 200,
    height: 100
  }
};
export default Add;
