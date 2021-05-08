import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Tabs from '../navigation/tabs';

export default class MainScreen extends Component {
    render() {
        this.props.navigation.setOptions({
            headerBackTitle: '',
            headerShown: false,
        })
        return (
            <Tabs />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
