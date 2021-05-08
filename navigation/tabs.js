import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


/* Screen */
import HomeScreen from "../screens/HomeScreen";
import FindScreen from "../screens/ReportScreen";
import PostScreen from "../screens/PlanScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddTransactionScreen from "../screens/AddTransactionScreen";
import EditProfileScreen from "../screens/EditProfileScreen"

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 2,
              }}
            >
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 2,
              }}
            >
              <Image
                source={require("../assets/report.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                REPORT
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={AddTransactionScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/plus.png")}
              resizeMode="contain"
              style={{
                  width: 40,
                  height: 40,
                  tintColor: "#fff",
                }}
            />
          ),
          tabBarButton: (props) => ( <CustomTabBarButton {...props} /> )
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 2,
              }}
            >
              <Image
                source={require("../assets/plan.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                PLAN
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 2,
              }}
            >
              <Image
                source={require("../assets/profile.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                PROFILE
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default tabs;

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
        shadowColor: '#fff',
        elevation: 0,
      },
      headerTintColor: "#000",
      
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: '',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#fff"
            color="#000"
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerRight: () => (
          <MaterialCommunityIcons.Button name="account-edit"
          size={25}
          backgroundColor="#fff"
          color="#000"
          onPress={() => navigation.navigate('EditProfile')}
          />
        )
      }}
    />
    <ProfileStack.Screen
    name="EditProfile" options={{title: 'Edit Profile'}} component={EditProfileScreen} />
  </ProfileStack.Navigator>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
