import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'
import { Link } from 'expo-router';
import style from './index.module.css';
import { rgbaColor } from 'react-native-reanimated/lib/typescript/Colors';



function App() {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>
                Well just import some text here
            </Text>
        </View>
            <Link href="/explore" style={{marginHorizontal: 'auto'}} asChild>
                <Pressable style={styles.buttonPres}>
                    <Text style={styles.buttonText}>
                        Explore
                    </Text>
                </Pressable>
            </Link>
        
        </>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00ffff",
        margin: 50,
    },
    text: {
        color: "red",
        fontStyle: "italic",
        fontSize: 16,
        fontFamily: "monospace",
        margin: 20
    },
    link: {
        color: "blue",
        textDecorationLine: "underline",
        fontFamily: "Times New Roman",
        fontSize: 18,
        padding:5,
    },
    buttonPres:{
        height:60,
        borderRadius:20,
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.75)',
        padding:6
    },
    buttonText:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    }

})