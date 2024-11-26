import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useEffect, useState} from 'react';
import Input from '../../components/Input';
import {useWeather} from '../../hooks/useWeather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const One = props => {
  const navigation = useNavigation ();
  const [currentTemperature, setCurrentTemperature] = useState (null);
  const [city, setCity] = useState ('London');

  const {data} = useWeather (city);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem ('my-key', city);
    } catch (e) {
      // saving error
      alert (e);
    }
  };
  const getData = async value => {
    try {
      let result = await AsyncStorage.getItem ('my-key');
      alert (result);
    } catch (e) {
      // saving error
      alert (e);
    }
  };
  return (
    <View>
      <Text>Weather App</Text>
      <Input placeholder="Enter City Name" onChangeText={t => setCity (t)} />
      {/* <Button title="Search" onPress={loadWeather} /> */}
      <Text>
        Current Temperature In {city} Is: {data ? data.main.temp : null}
      </Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate ('Contact', {
            phone: '031111111',
            address: 'xyz, house # alpha,street beta',
          });
        }}
      />
      <Button title="Save City" onPress={storeData} />
      <Button title="Get City" onPress={getData} />

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
