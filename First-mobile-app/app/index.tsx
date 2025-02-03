import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import style from './index.module.css';



function App() {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>
                Well just import some text here
            </Text>
        </View>
        </>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00ffff",
        
    },
    text: {
        color: "red",
        fontStyle: "italic",
        fontSize: 16,
        fontFamily: "monospace"
    }
})