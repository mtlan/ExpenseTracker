import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import HomeTransaction from '../components/HomeTransaction';
import Fire from '../config/Fire';

export default class Home extends React.Component {
  state = {
    todaySelected: true,
  };
  onTabPressed = () => {
    this.setState({todaySelected: !this.state.todaySelected});
  };
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      money: 0,
      transactionName: '',
      transactionType: '',
      price: '',
      Note: '',
      currentUID: Fire.auth().currentUser.uid,
    };
  }
  componentDidMount() {
    const {currentUID, money} = this.state;
    let totalMoney = money;
    const BackUpState = this.state.transactions;
    Fire.database()
      .ref('Transactions/' + currentUID)
      .once('value', snapshot => {
        //   console.log(snapshot);
        snapshot.forEach(childSnapshot => {
          totalMoney =
            childSnapshot.val().type === 'deposit'
              ? parseFloat(childSnapshot.val().price) + totalMoney
              : totalMoney - parseFloat(childSnapshot.val().price);
          BackUpState.push({
            id: childSnapshot.val().id,
            name: childSnapshot.val().name,
            type: childSnapshot.val().type,
            note: childSnapshot.val().note,
            price: childSnapshot.val().price,
            user_id: childSnapshot.val().user_id,
          });
        });
        this.setState({
          transactions: BackUpState,
          money: totalMoney,
        });
        console.log(totalMoney)
      });
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{paddingTop: 50}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              justifyContent: 'space-between',
            }}>
            <Image
              resizeMode="contain"
              style={{height: 30, width: 30}}
              source={require('../assets/images/menu.png')}
            />
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 100,
                borderWidth: 5,
                borderColor: '#00192D',
              }}
              source={require('../assets/images/profile.jpg')}
            />
          </View>
        </View>

        <View style={{padding: 30}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: '700',
            }}>
            My Budget
          </Text>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 30,
            }}>
            $ {this.state.money}
          </Text>
        </View>

        <View
          style={{
            height: 1000,
            width: '100%',
            backgroundColor: '#fff',
            marginTop: 50,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View style={{flexDirection: 'row', paddingTop: 20, padding: 50}}>
            <TouchableOpacity
              onPress={this.onTabPressed}
              style={{
                paddingVertical: 6,
                borderBottomWidth: 4,
                borderBottomColor: this.state.todaySelected
                  ? '#00192d'
                  : '#fff',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: this.state.todaySelected ? '#00192D' : '#8e9aaf',
                }}>
                TODAY
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.onTabPressed}
              style={{
                marginLeft: 30,
                borderBottomWidth: 4,
                paddingVertical: 6,
                borderBottomColor: this.state.todaySelected
                  ? '#fff'
                  : '#00192d',
                color: this.state.todaySelected ? '#8e9aaf' : '#00192d',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  opacity: 0.5,
                }}>
                MONTH
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 30,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              14th April 2021
            </Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#e76f51'}}>
              {this.state.money}
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              width: '85%',
              marginLeft: 30,
              marginTop: 20,
              opacity: 0.3,
            }}></View>

          <View style={{width: '100%', height: '30%'}}>
            <ScrollView contentContainerStyle={{paddingBottom: 150}}>
              {Object.keys(this.state.transactions).map(id => (
                // <HomeTransaction
                //   key={id}
                //   type={this.state.transactions[id].type}
                //   name={this.state.transactions[id].name}
                //   price={this.state.transactions[id].price}
                // />
                <TouchableRipple
                  onPress={() =>
                    this.props.navigation.navigate('Edit', {
                      P1: this.state.transactions[id].price,
                      P2: this.state.transactions[id].name,
                      P3: this.state.transactions[id].type,
                      P4: this.state.transactions[id].note,
                    })
                  }>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginHorizontal: 30,
                      paddingTop: 30,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          height: 45,
                          width: 45,
                          borderRadius: 100,
                          backgroundColor: '#00192d',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          resizeMode="contain"
                          style={{height: 25, width: 25}}
                          source={require('../assets/images/electricity.png')}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          marginLeft: 10,
                        }}>
                        {this.state.transactions[id].name}
                      </Text>
                    </View>
                    <Text>
                      {this.state.transactions[id].type === 'deposit' ? (
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: 'green',
                          }}>
                          +{this.state.transactions[id].price}
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#e76f51',
                          }}>
                          -{this.state.transactions[id].price}
                        </Text>
                      )}
                    </Text>
                  </View>
                </TouchableRipple>
              ))}
              {/* first Item */}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22ce99',
  },
});
