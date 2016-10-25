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
    flexDirection: 'row',
    backgroundColor: '#333',
    height: 70,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 5
  }
};
export default Footer;
