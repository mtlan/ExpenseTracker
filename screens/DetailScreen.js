import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Picker,
  TouchableOpacity,
} from 'react-native';
import Fire from '../config/Fire';

export default class check extends Component {
  constructor(props) {
    super(props);
    const {P1, P2, P3, P4} = this.props.route.params;
    this.state = {
      transactions: [],
      money: 0,
      transactionName: this.props.route.params.P2,
      transactionType: '',
      price: '',
      Note: '',
      currentUID: Fire.auth().currentUser.uid,
    };
    
  }
  updateTransaction = () => {
    const {
      transactionName,
      price,
      money,
      currentUID,
      Note,
      transactionType,
    } = this.state;
    if ((transactionName, price, Note, transactionType)) {
      Fire.database()
        .ref('Transactions/' + currentUID)
        .update({
          transactionName: this.props.route.params.P2,
        })
        .catch(error => {
          console.log('error', error);
        });
    }
  };
  render() {
    const {navigate} = this.props.navigation;
    // const {P1, P2, P3, P4} = this.props.route.params;
    return (
      <View>
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
            placeholder="amount spent"
            keyboardType="numeric"
            style={{
              width: '100%',
              fontSize: 20,
              marginLeft: 20,
              borderBottomWidth: 2,
              borderBottomColor: '#000',
            }}>
            {/* {P1} */}
          </TextInput>
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
                }}>
                {/* {P2} */}
              </TextInput>
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
                style={{paddingLeft: 200, marginLeft: 20, width: 240}}
                itemStyle={{
                  height: 50,
                  transform: [{scaleX: 1}, {scaleY: 1}],
                }}>
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
                placeholder="Note"
                style={{
                  width: 270,
                  fontSize: 20,
                  marginLeft: 20,
                  padding: 10,
                  borderBottomWidth: 2,
                  borderBottomColor: '#000',
                }}>
                {/* {P4} */}
              </TextInput>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.updateTransaction(this.props.navigation.navigate('Home'))
          }
          style={{
            width: 200,
            backgroundColor: '#0d47a1',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            marginTop: 50,
            marginLeft: 80,
          }}>
          <Text style={{color: '#fff', fontSize: 16, textAlign: 'center'}}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
