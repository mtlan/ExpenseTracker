import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LSScreen from './screens/LSScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainScreen from './screens/MainScreen';
import SlideScreen from './screens/SlideScreen';
import DetaiScreen from './screens/DetailScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Slide" component={SlideScreen} />
            <Stack.Screen name="LS" component={LSScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Sign up" component={SignUpScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Edit" component={DetaiScreen} options={{
                headerRight: () => (
                  <MaterialCommunityIcons.Button
                    name="delete"
                    size={25}
                    backgroundColor="#fff"
                    color="#000"
                    onPress={() => navigation.navigate('EditProfile')}
                  />
                ),
              }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
},
})
