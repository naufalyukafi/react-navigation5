import React, {useState, useEffect} from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import { Input,  Button, Spinner } from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';
import Todo from "../Components/Todo";

const FormAbsenScreen = () => {
    const [todo, setTodo] = useState('')
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])

    const ref = firestore().collection('todo')

    async function addTodo() {
        await ref.add({
            title: todo,
            complete: false
        });
        setTodo('');
    }
    useEffect(() => {
        return ref.onSnapshot((querySnapshot) => {
            const list = []
            querySnapshot.forEach(doc => {
                const {title, complete} = doc.data();
                list.push({
                    id: doc.id,
                    title,
                    complete
                })
            })
            setTodos(list)
            if(loading) {
                setLoading(false)
            }
        })
    }, [])

    if(loading) {
        return (
            <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Spinner />
            </View>
        )
    }

    return (
        <>
            <View style={styles.wrapper}>
                <FlatList
                    style={{flex: 1}}
                    data={todos}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Todo {...item} />}
                />
            </View>
            <Input 
                value={todo}
                onChangeText={setTodo}
                placeholder="Input new todo"
                style={styles.input}
            />
            <Button onPress={() => addTodo()}>Add Todo</Button>
        </>     
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1
    }
})

export default FormAbsenScreen
