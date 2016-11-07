import React from 'react';
import { View } from 'react-native';

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
    height: 80,
    // paddingLeft: 60,
    // paddingRight: 60,
    paddingBottom: 5
  }
};
export default Footer;
