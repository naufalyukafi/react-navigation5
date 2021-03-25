import React, {useState} from 'react'
import {StyleSheet, Text, View, Button, TextButton, TouchableOpacity, TextInput, Alert} from 'react-native'
import auth from "@react-native-firebase/auth"
const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onRegisterPress = () => {
        if(email == '' || password == ''){
            Alert.alert('Error', 'Form tidak boleh kosong')
        } else {
            auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                setEmail('')
                setPassword('')
                Alert.alert('Success', 'Buat Akun Molidu Berhasil')
            })
            .catch((err) => {
                Alert.alert('Kata Sandi Error', err.message)
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
                <TouchableOpacity style={styles.btnRegister} onPress={onRegisterPress}>
                    <Text style={styles.btnRegisterText}>REGISTERS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text>Login di sini!</Text>
                </TouchableOpacity>
            {/* <Button color="green" onPress={() => navigation.navigate('MainApp')} title="Menuju Halaman Home" /> */}
            </View>
        </View>
    )
}

export default Register

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
    btnRegisterText: {
        backgroundColor: "blue",
        padding: 15,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        marginTop: 10,
    },
    btnLogin: {
        marginTop: 10
    }
})