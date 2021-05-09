import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Fire from '../config/Fire';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email:'',
      password:'',
      errorMessage: null
    })
  }

  onLogin = (email, password) => {
    try {
      Fire.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .then(function (user) {
        console.log(user);
      });
    } catch (error) {
      console.log(error.toString());
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25}}>Welcome Back!</Text>
        <Text style={{fontSize: 16, color: 'gray', marginTop: 15}}>
          Sign in to continue
        </Text>

        <Animatable.View ref={this.validateInput}>
          <TextInput
            style={{
              marginTop: 30,
              borderBottomColor: '#ddd',
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
            placeholder="Username"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />

          <TextInput
            style={{
              marginTop: 30,
              borderBottomColor: '#ddd',
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>
            {this.state.errMsg}
          </Text>
        </Animatable.View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity
            onPress={() => this.onLogin(this.state.email,this.state.password)}
            style={{
              width: 200,
              backgroundColor: '#0d47a1',
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              marginTop: -10,
            }}>
            <Text style={{color: '#fff', fontSize: 16, textAlign: 'center'}}>
              Login Now
            </Text>
          </TouchableOpacity>

          <Text style={{marginTop: 20}}>Forgot Password ?</Text>
          <View style={{flexDirection: 'row', marginTop: 40}}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40 / 2,
                backgroundColor: '#3f51b5',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
                f
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40 / 2,
                backgroundColor: '#f44336',
                marginHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
                G
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40 / 2,
                backgroundColor: '#1565c0',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
                in
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 40}}>
            <Text style={{color: 'gray'}}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sign up')}>
              <Text style={{fontWeight: 'bold'}}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
