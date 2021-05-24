import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Picker,
} from 'react-native';
import Fire from '../config/Fire';
import Transaction from '../components/Transaction';

export default class AddItems extends React.Component {
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
  addNewTransaction = () => {
    const {
      transactionName,
      price,
      money,
      currentUID,
      Note,
      transactionType,
    } = this.state;
    if ((transactionName, price, Note, transactionType)) {
      const BackUpState = this.state.transactions;
      BackUpState.push({
        id: BackUpState.length + 1,
        name: transactionName,
        type: transactionType,
        price: price,
        note: Note,
        user_id: currentUID,
      });

      Fire.database()
        .ref('Transactions/' + currentUID)
        .push({
          id: BackUpState.length,
          name: transactionName,
          type: transactionType,
          price: price,
          note: Note,
          user_id: currentUID,
        })
        .then(data => {
          console.log('success callback');
          this.setState({
            transactions: BackUpState,
            money:
              transactionType === 'deposit'
                ? money + parseFloat(price)
                : money - parseFloat(price),
            transactionName: '',
            Note: '',
            transactionType: '',
            price: '',
            Note: '',
          });
        })
        .catch(error => {
          console.log('error', error);
        });
      console.log(BackUpState);
    }
  };
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
        });
      });
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 1000,
            width: '100%',
            backgroundColor: '#fff',
            marginTop: 100,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}>
          <View
            style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigate('Home', {name: 'Home'})}>
              <Image
                resizeMode="contain"
                style={{height: 20, width: 20}}
                source={require('../assets/images/exit.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                marginLeft: 50,
              }}>
              Add Transaction
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.addNewTransaction(this.props.navigation.navigate('Home'))
              }>
              <Image
                resizeMode="contain"
                style={{height: 30, width: 30, marginLeft: 40}}
                source={require('../assets/images/tick.png')}
              />
            </TouchableOpacity>
          </View>
              <Text style={{marginLeft:20}}>{this.state.money}</Text>
          <View style={{flexDirection: 'row', padding: 30}}>
            <View
              style={{
                height: 40,
                width: 90,
                backgroundColor: '#22ce99',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                USD
              </Text>
            </View>
            <TextInput
              onChangeText={price => this.setState({price})}
              value={this.state.price}
              
              placeholder="amount spent"
              keyboardType="numeric"
              style={{
                width: '100%',
                fontSize: 20,
                marginLeft: 20,
                borderBottomWidth: 2,
                borderBottomColor: '#000',
              }}></TextInput>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 30,
              paddingTop: 2,
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
                  source={require('../assets/images/transaction.png')}
                />
              </View>
              <View>
                <TextInput
                  onChangeText={transactionName =>
                    this.setState({transactionName})
                  }
                  value={this.state.transactionName}
                  placeholder="Transaction Name"
                  style={{
                    width: '180%',
                    fontSize: 20,
                    marginLeft: 20,
                    borderBottomWidth: 2,
                    borderBottomColor: '#000',
                  }}></TextInput>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 30,
              paddingTop: 20,
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
                  source={require('../assets/images/food.png')}
                />
              </View>
              <View>
                <Picker
                  onChangeText={transactionType =>
                    this.setState({transactionType})
                  }
                  style={{paddingLeft: 200, marginLeft: 20, width: 240}}
                  itemStyle={{
                    height: 50,
                    transform: [{scaleX: 1}, {scaleY: 1}],
                  }}
                  selectedValue={this.state.transactionType}
                  onValueChange={(itemValor, itemindex) =>
                    this.setState({
                      transactionType: itemValor,
                    })
                  }>
                  <Picker.Item label="Select" value="" />
                  <Picker.Item label="Expense" value="expense" />
                  <Picker.Item label="Deposit" value="deposit" />
                </Picker>
                <View
                  style={{
                    borderBottomWidth: 2,
                    width: '104%',
                    marginTop: -2,
                    marginLeft: 20,
                    opacity: 0.4,
                  }}></View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 30,
              paddingTop: 10,
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
                  source={require('../assets/images/note.png')}
                />
              </View>
              <View>
                <TextInput
                  onChangeText={Note => this.setState({Note})}
                  value={this.state.Note}
                  placeholder="Note"
                  style={{
                    width: 270,
                    fontSize: 20,
                    marginLeft: 20,
                    padding: 10,
                    borderBottomWidth: 2,
                    borderBottomColor: '#000',
                  }}></TextInput>
              </View>
            </View>
          </View>

          <View
            style={{
              height: '30%',
              width: '90%',
              backgroundColor: '#fff',
              marginHorizontal: 20,
              borderRadius: 30,
              marginTop: 20,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 8,
            }}>
            <Text
              style={{
                padding: 20,
                fontSize: 15,
                fontWeight: '500',
                bottom: 10,
              }}>
              Last Records
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                width: '90%',
                opacity: 0.5,
                marginLeft: 20,
                bottom: 10,
              }}></View>
      
            <View style={{width: '100%', height: '30%'}}>
              <ScrollView contentContainerStyle={{paddingBottom: 60}}>
                {Object.keys(this.state.transactions).map(id => (
                  <Transaction
                    key={id}
                    type={this.state.transactions[id].type}
                    name={this.state.transactions[id].name}
                    price={this.state.transactions[id].price}
                  />
                ))}
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
    backgroundColor: '#22ce99',
  },
});
