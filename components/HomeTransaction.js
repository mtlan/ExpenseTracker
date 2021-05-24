import React from 'react';
import {Text, View, Image} from 'react-native';

const HomeTransaction = props => {
  return (
    <View>
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
            {props.name}
          </Text>
        </View>
        <Text>
          {props.type === 'deposit' ? (
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'green'}}>
              +{props.price}
            </Text>
          ) : (
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#e76f51'}}>
              -{props.price}
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default HomeTransaction;
