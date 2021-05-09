import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Fire from '../config/Fire';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.validateInput = React.createRef();
    this.state = {
      username: "",
      email: "",
      password: "",
      errMsg: "",
    };
  }
  onSignUp = (email, password) => {
    try {
      Fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate("Main"))
        .then((user) => {
          var currentUser = Fire.auth().currentUser;
          currentUser.updateProfile({
            displayName: this.state.username,
          });
        });
    } catch (error) {
      // console.log(error.toString());
      this.setState({errMsg: error.message})
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25 }}>Sign up to continue</Text>

        <Animatable.View ref={this.validateInput}>
          <TextInput
            style={{
              marginTop: 20,
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
            placeholder="Username"
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          />

          <TextInput
            style={{
              marginTop: 20,
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />

          <TextInput
            style={{
              marginTop: 20,
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          {/* <TextInput
            style={{
              marginTop: 20,
              borderBottomColor: "#ddd",
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
            placeholder="Retype Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ errMsg: "" });
            }}
          /> */}
          <Text style={{ color: "red", textAlign: "center", marginTop: 10 }}>
            {this.state.errMsg}
          </Text>
        </Animatable.View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => this.onSignUp(this.state.email, this.state.password)}
            style={{
              width: 200,
              backgroundColor: "#0d47a1",
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 40,
              marginTop: -30,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40 / 2,
                backgroundColor: "#3f51b5",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
                f
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40 / 2,
                backgroundColor: "#f44336",
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
                G
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 40 / 2,
                backgroundColor: "#1565c0",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
                in
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <Text style={{ color: "gray" }}>Already have an account?</Text>
            <TouchableOpacity onPress= { () => this.props.navigation.navigate('Login')}>
            <Text style={{ fontWeight: "bold" }}> Sign In</Text>
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
    backgroundColor: "#fff",
    padding: 20,
  },
});
