import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../components/Header';

function ContactScreen (props) {
  // console.log (props.route.params);
  // const {phone, address} = props.route.params;
  const navigation = useNavigation ();
  return (
    <View style={styles.container}>
      <Header title="Contact" />
      <Text>Contact Screen</Text>
      <Text>Phone#:{12312312}</Text>
      <Text>Address:{'Address Here'}</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate ('Details');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

export default ContactScreen;
