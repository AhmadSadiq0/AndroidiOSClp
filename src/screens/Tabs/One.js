import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Button} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Input from '../../components/Input';
const One = props => {
  const navigation = useNavigation ();
  const [currentTemperature, setCurrentTemperature] = useState (null);
  const [city, setCity] = useState (null);

  const loadWeather = async () => {
    try {
      let response = await axios.get (
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4251b5f89948a271b3def71083a728f0&units=metric`
      );
      setCurrentTemperature (response.data.main.temp);
    } catch (e) {
      console.log (e);
    }
  };

  useEffect (() => {
    loadWeather ();
  }, []);

  return (
    <View>
      <Text>Weather App</Text>
      <Input placeholder="Enter City Name" onChangeText={t => setCity (t)} />
      <Button title="Search" onPress={loadWeather} />
      <Text>Current Temperature In {city} Is: {currentTemperature}</Text>
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
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default One;
