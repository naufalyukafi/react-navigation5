import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import auth from "@react-native-firebase/auth"

const Home = ({navigation}) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const userInfo = auth().currentUser
        setUser(userInfo)
    }, [])
    const onSignOut = () => {
        auth().signOut()
        .then(res => {
            navigation.popToTop()
            Alert.alert('Anda Keluar Akun')

        })
        .catch((err) => Alert.alert('Error', err.message))
    }
    return (
        <View style={styles.wrapper}>
            <Text>Home</Text>
            <Text>{user.email}</Text>
            <View style={{height: 20}} />
            <TouchableOpacity style={styles.btnRegister} onPress={onSignOut}>
                <Text style={styles.btnSignOutText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSignOutText: {
        backgroundColor: "blue",
        padding: 15,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        marginTop: 10,
    }
})