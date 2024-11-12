import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  const {placeholder} = props;
  return <TextInput style={styles.textInput} placeholder={placeholder} />;
};

const styles = StyleSheet.create ({
  textInput: {
    height: 50,
    backgroundColor: 'white',
    margin: 10,
    paddingLeft: 15,
    borderRadius: 30,
    shadowColor: '#d3d3d3',
    shadowOpacity: 1,
    shadowRadius: -5,
    shadowOffset: {
      height: 5,
      width: 0,
    },
  },
});

export default Input;
