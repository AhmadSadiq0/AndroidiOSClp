import {View, Text, StyleSheet} from 'react-native';
import {getWeather} from '../../services/WeatherServices';
import {useEffect, useState} from 'react';
import {useWeather} from '../../hooks/useWeather';

const Two = () => {
  const {data} = useWeather ('Atlanta');

  return (
    <Text>
      I am Tab Two and temperature in Atlanta is:{data ? data.main.temp : null}
    </Text>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Two;
