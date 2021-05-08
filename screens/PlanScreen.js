import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const PlanScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Post Screen</Text>
            <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
        </View>
    )
}

export default PlanScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'

    },
})
