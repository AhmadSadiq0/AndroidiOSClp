/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
//Core components 
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  Button,
  Alert,
  TextInput
} from 'react-native';
import Header from './src/components/HeaderClass'
import Input from './src/components/Input';



function App(): React.JSX.Element {

  //useState => Hooks
  //Why do we use useState to create a state
  //What's a state?
  //states are immutable
  const [value, setValue] = useState(10)
  const [number, setNumber] = useState(10)
  const [num, setNum] = useState(101)

  let count = 10
  //JSX => Javascript xml
  console.log('rendered')
  const onButtonPressed = () => {
    Alert.alert('Hello World')
  }
  const onAddPressed = () => {
    setValue(value + 1)
    // count++
    // console.log(count)
  }
  const onChangeNumber = () => {
    setNumber(number + 1)
    // count++
    // console.log(count)
  }
  const onChangeNum = () => {
    setNum(num + 1)
    // count++
    // console.log(count)
  }
  //mounting, updating and unmounting
  useEffect(() => {
    alert('Welcome')
    //api call

    //unmounting
    // return () => {
    //   alert('Un mounting')
    // }

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title='Welcome' />
        <View style={styles.row}>
          <Text>{"Value " + value}</Text>
          <Text>{"Number " + number}</Text>
          <Text>{"Num is " + num}</Text>

        </View>



        <Text>Hello Consultants</Text>
        <Text>Welcome to React Native CLP!</Text>
        {/* <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        /> */}
        <Input placeholder={'Enter your email'} />
        <Input placeholder={"Enter your password"} />

        <ActivityIndicator />
        <ActivityIndicator
          animating={true}
          color={'red'}
          size={'large'}
        />

        <Button
          onPress={onAddPressed}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onChangeNumber}
          title="Update Number"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onChangeNum}
          title="Update Num"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Header title='Users' />

        <FlatList
          data={[{ firstName: 'Arpit', lastName: '', age: 26 },
          { firstName: 'Daniel', lastName: '', age: 26 }]}
          renderItem={({ item }) => {
            return (
              <Text style={styles.flatListItem}>{item.firstName}</Text>
            )
          }}
          keyExtractor={item => item.firstName}
        />

        <Button
          onPress={onButtonPressed}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown'
  }, flatListItem: {
    fontSize: 18,
    backgroundColor: '#d3d3d3',
    height: 30,
    margin: 5

  }, row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default App;
