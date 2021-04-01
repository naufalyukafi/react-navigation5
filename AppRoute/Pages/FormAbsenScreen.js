import React from 'react'
import {StyleSheet, View, TouchableOpacity, Alert, ScrollView} from 'react-native'
import { Input,  IndexPath, Select, SelectItem, Button, Text } from '@ui-kitten/components';

const data = ['Hadir','Izin', 'Alfa'];
const kelas = ['1', '2', '3', '4', '5', '6']

const FormAbsenScreen = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const [selectedIndex2, setSelectedIndex2] = React.useState(new IndexPath(0));

    const [inputName, setInputName] = React.useState('')
    const [handleInput, setHandleInput] = React.useState({})

    const displayValue = data[selectedIndex.row];   
    const displayValue2 = kelas[selectedIndex2.row];

    const renderOption = (title, id) => (
        <SelectItem key={id} title={title}/>
    );

    const onSubmit = () => {
        setHandleInput({inputName, displayValue2, displayValue})
        // Alert.alert(handleInput
    }
    React.useEffect(() => {
        onSubmit()
    }, [inputName])
    console.log(handleInput)
    return (
        
        <View style={styles.wrapper}>
            <Input 
                value={inputName}
                onChangeText={(text) => setInputName(text)}
                label="Name"
                placeholder="Input your name"
                style={styles.input}
            />
            <Select
                placeholder="Input kelas"
                label="Kelas"
                style={styles.select}
                value={displayValue2}
                selectedIndex={selectedIndex2}
                onSelect={index => setSelectedIndex2(index)}>
                {kelas.map(renderOption)}
            </Select>
            <Select
                label="Absensi"
                style={styles.select}
                value={displayValue}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                {data.map(renderOption)}
            </Select>
            <Button 
                style={{marginLeft: 30, marginRight: 20, marginTop: 20}}
                onPress={onSubmit}
            >Submit</Button>
        </View>     
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    input: {
        backgroundColor: '#fff',
        paddingLeft: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    radioButton: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 40
    },
    select: {
        paddingLeft: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    }

})

export default FormAbsenScreen
