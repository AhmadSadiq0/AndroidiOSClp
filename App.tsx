
import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ContactScreen from './src/screens/ContactScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import One from './src/screens/Tabs/One';
import Two from './src/screens/Tabs/Two';
import './gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';




const bottomTabs = createBottomTabNavigator({
  screens: {
    One: One,
    Two: Two
  }
})
const drawerStack = createDrawerNavigator({
  screens: {
    Home: {
      screen: bottomTabs,
      options: {
        title: 'Home Screen For CLP',
        headerStyle: {
          backgroundColor: '#f4511e',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }

    },
    Details: {
      screen: DetailsScreen,
      options: {
        headerStyle: {
          backgroundColor: '#f4511e',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Button title='Info' onPress={() => alert('This is a button!')}></Button>
        ),
      }
    },
    Contact: ContactScreen
  },
})

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: bottomTabs,
      options: {
        title: 'Home Screen For CLP',
        headerStyle: {
          backgroundColor: '#f4511e',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }

    },
    Details: {
      screen: DetailsScreen,
      options: {
        headerStyle: {
          backgroundColor: '#f4511e',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Button title='Info' onPress={() => alert('This is a button!')}></Button>
        ),
      }
    },
    Contact: ContactScreen
  },
});



const Navigation = createStaticNavigation(drawerStack);

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})