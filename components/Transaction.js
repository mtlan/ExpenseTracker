import React from "react";
import { render } from "react-dom";
import { Text, View, Image } from "react-native";

const Transaction = (props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 30,
          paddingTop: 5,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 35,
              width: 35,
              borderRadius: 100,
              backgroundColor: "#00192d",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ height: 20, width: 20 }}
              source={require("../assets/images/taxi.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            {props.name}
          </Text>
        </View>
        <Text>{props.type === 'deposit' ? (
          <Text style={{fontSize: 15,fontWeight: "bold",color: "green"}}>+{props.price}</Text>) : (<Text style={{fontSize: 15,fontWeight: "bold",color: "#e76f51"}}>-{props.price}</Text>)
          
          }</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 2,
          width: "90%",
          opacity: 0.3,
          marginLeft: 20,
          marginTop: 15,
        }}
      ></View>
    </View>
  );
};

export default Transaction;
