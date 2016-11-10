import React from 'react';
import { View, Platform } from 'react-native';

const Footer = (props) => {
    return (
      <View style={styles.footerStyle}>
        {props.children}
      </View>
    );
};

const styles = {
  footerStyle: {
    flex: 0,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#212535',
    height: (Platform.OS === 'ios') ? 80 : 160,
    paddingBottom: 5
  }
};
export default Footer;
