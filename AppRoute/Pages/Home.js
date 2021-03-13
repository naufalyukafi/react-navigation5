import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.wrapper}>
            <Text>Home s</Text>
            <View style={{height: 20}} />
            <Button title="Ke login Dongs" onPress={()=>navigation.navigate('LoginScreen')}  />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})