import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../components/Header';

function HomeScreen (props) {
  const navigation = useNavigation ();
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate ('Contact', {
            phone: '031111111',
            address: 'xyz, house # alpha,street beta',
          });
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

export default HomeScreen;
