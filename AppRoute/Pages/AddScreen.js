import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const AddScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>AddScreen</Text>
        </View>
    )
}

export default AddScreen

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})