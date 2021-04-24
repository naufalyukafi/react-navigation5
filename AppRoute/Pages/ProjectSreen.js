import React from 'react'
import {StyleSheet, Text, View, ImageBackground} from 'react-native'
import { Button } from '@ui-kitten/components';
import ImagePicker from 'react-native-image-crop-picker';

const ProjectScreen = () => {
    const [image, setImage] = React.useState("https://avatars.githubusercontent.com/u/56672065?v=4")
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 400,    
            cropping: true,
            useFrontCamera: true,
        }).then(image => {
            setImage(image.path)
        });
    }
    const chosePhotoFromGalery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
        });
    }
    return (
        <View style={styles.wrapper}>
            <Text>ProjectScreen</Text>
            <ImageBackground
                source={{
                    uri: image,
                }}
                style={{width: 120, height: 120}}
            />
            <View style={{marginBottom: 40}} />
            <Button onPress={takePhotoFromCamera}>Take Photo</Button>
            <View style={{marginBottom: 20}} />
            <Button onPress={chosePhotoFromGalery}>Chose From Galery</Button>
        </View>
    )
}

export default ProjectScreen

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})