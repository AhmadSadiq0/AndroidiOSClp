import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//functional components
const Header = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    height: 30,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default Header;
