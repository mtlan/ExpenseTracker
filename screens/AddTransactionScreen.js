import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

export default class AddItems extends React.Component {
  static navigationOptions = {
    title: "Home",
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 1000,
            width: "100%",
            backgroundColor: "#fff",
            marginTop: 100,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{ flexDirection: "row", padding: 20, alignItems: "center" }}
          >
            <TouchableOpacity
              onPress={() => navigate("Home", { name: "Home" })}
            >
              <Image
                resizeMode="contain"
                style={{ height: 20, width: 20 }}
                source={require("../assets/images/exit.png")}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
                marginLeft: 50,
              }}
            >
              Add Transaction
            </Text>
          </View>

          <View style={{ flexDirection: "row", padding: 30 }}>
            <View
              style={{
                height: 40,
                width: 90,
                backgroundColor: "#22ce99",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "700",
                }}
              >
                USD
              </Text>
            </View>
            <TextInput
              placeholder="amount spent"
              keyboardType="numeric"
              style={{
                width: "100%",
                fontSize: 20,
                marginLeft: 20,
                borderBottomWidth: 2,
                borderBottomColor: "#000",
              }}
            ></TextInput>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 30,
              paddingTop: 30,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: 100,
                  backgroundColor: "#00192d",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ height: 25, width: 25 }}
                  source={require("../assets/images/food.png")}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingLeft: 10,
                    marginLeft: 10,
                  }}
                >
                  Food & Drinks
                </Text>
                <View
                  style={{
                    borderBottomWidth: 2,
                    width: "140%",
                    marginTop: 20,
                    marginLeft: 20,
                    opacity: 0.4,
                  }}
                ></View>
              </View>
            </View>
            <Image
              resizeMode="contain"
              style={{ height: 20, width: 20}}
              source={require("../assets/images/arrow.png")}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 30,
              paddingTop: 30,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: 100,
                  backgroundColor: "#00192d",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ height: 25, width: 25 }}
                  source={require("../assets/images/note.png")}
                />
              </View>
              <View>
                <TextInput
                  placeholder="Note"
                  keyboardType="numeric"
                  style={{
                    width: 300,
                    fontSize: 20,
                    marginLeft: 10,
                    padding: 10,
                    borderBottomWidth: 2,
                    borderBottomColor: "#000",
                  }}
                ></TextInput>
              </View>
            </View>
          </View>

          <View
            style={{
              height: "30%",
              width: "90%",
              backgroundColor: "#fff",
              marginHorizontal: 20,
              borderRadius: 30,
              marginTop: 20,

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 8,
            }}
          >
            <Text
              style={{
                padding: 20,
                fontSize: 15,
                fontWeight: "500",
                bottom: 10,
              }}
            >
              Last Records
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                width: "90%",
                opacity: 0.5,
                marginLeft: 20,
                bottom: 10,
              }}
            ></View>
            {/* them */}
            <View style={{ width: "100%", height: "30%" }}>
              <ScrollView>
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
                      Taxi
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#e76f51",
                    }}
                  >
                    -46,00
                  </Text>
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
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 30,
                    paddingTop: 10,
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
                        source={require("../assets/images/food.png")}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      Food & Drinks
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#e76f51",
                    }}
                  >
                    -26,00
                  </Text>
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
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22ce99",
  },
});
