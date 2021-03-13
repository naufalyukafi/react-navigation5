import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const Login = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <Text>Login Text s</Text>
            <View style={{height: 10}} />
            <Button color="green" onPress={() => navigation.navigate('MainApp')} title="Menuju Halaman Home" />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})