import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//class
class HeaderClass extends React.Component {
  constructor (props) {
    super (props);
    //state creation in class components
    this.state = {
      count: 0,
    };
  }
  // gets called once component is mounted
  componentDidMount () {
    // alert ('Mounted');
  }
  //After component is updated
  componentDidUpdate () {
    // alert ('Updated');
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

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
export default HeaderClass;
