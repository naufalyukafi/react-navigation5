import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Setting = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Setting</Text>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})