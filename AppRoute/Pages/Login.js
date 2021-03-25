import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Alert} from 'react-native'
import auth from "@react-native-firebase/auth"
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onLoginPress = () => {
        if(email == '' || password == ''){
            Alert.alert('Error', 'Form tidak boleh kosong')
        } else {
            auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                setEmail('')
                setPassword('')
                // console.log('respond berhasil ', res)
                Alert.alert('Login Berhasil')
                navigation.navigate('MainApp')
            })
            .catch((err) => {
                // console.error("Error", err.message)
                Alert.alert('Error', err.message)
            })
        }
       
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.formContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email anda"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput 
                    syle={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.btnLogin} onPress={onLoginPress}>
                    <Text style={styles.btnLoginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text>Daftar Akun di sini!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    formContainer: {
        padding: 20,
        flexDirection: 'column'
    },
    btnLoginText: {
        backgroundColor: "blue",
        padding: 15,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        marginTop: 10,
    },
    btnRegister: {
        marginTop: 10
    }
})