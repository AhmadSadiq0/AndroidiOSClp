import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';

function DetailsScreen () {
  const navigation = useNavigation ();
  const onBackPresssed = () => {
    navigation.goBack ();
  };
  return (
    <View style={styles.container}>
      <Header title="Details" />
      <Text>Details Screen</Text>
      <Button title="Back" onPress={onBackPresssed} />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

export default DetailsScreen;
