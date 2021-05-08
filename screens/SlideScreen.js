import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: 'one',
      title: 'Save money with ease',
      text: 'Manage personal expenses and perfect your financial goals',
      image: require('../assets/slide/slide1.jpg'),
      bg: '#43a047',
    },
    {
      key: 'two',
      title: 'Manage your bills',
      text: 'Control each revenue and expenditure with detailed reporting system',
      image: require('../assets/slide/slide2.jpg'),
      bg: '#59b2ab',
    },
    {
      key: 'three',
      title: 'Track your expenses',
      text: 'Financial planning smart and saving steps to realize dream',
      image: require('../assets/slide/slide3.png'),
      bg: '#22bcb5',
    }
  ];

export default class Slide extends Component {

    _renderItem = ({ item }) => {
        return (
          <View
        style={[styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      }
      _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
        this.props.navigation.navigate("LS");
      }

    render() {
        this.props.navigation.setOptions({
            headerBackTitle: '',
            headerShown: false,
        })
        return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 320,
        height: 320,
        marginVertical: 10,
        bottom: 50,
        borderRadius: 10,

      },
      text: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        fontSize:16,
        marginHorizontal:20,
        marginVertical: 5,

      },
      title: {
        fontSize: 25,
        color: '#263238',
        textAlign: 'center',
        bottom: 10,
        fontWeight: 'bold',

      },
});
