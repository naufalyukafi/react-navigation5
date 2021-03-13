import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const AboutScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>AboutScreen</Text>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})