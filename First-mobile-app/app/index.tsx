import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'
import { Link } from 'expo-router';
import style from './index.module.css';



function App() {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>
                Well just import some text here
            </Text>
            <Link href="/explore" style={styles.link} asChild>
                <Pressable>
                    <Text>
                        Explore
                    </Text>
                </Pressable>
            </Link>
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
    },
    link: {
        color: "blue",
        textDecorationColor: "underline",
        fontFamily: "Times New Roman",
        fontSize: 18,
        padding:5,
    }
})