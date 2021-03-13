import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const SkillsProject = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Skill Project</Text>
        </View>
    )
}

export default SkillsProject

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})