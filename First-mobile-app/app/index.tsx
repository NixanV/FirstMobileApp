import React from 'react'
import { View, Text} from 'react-native'
import style from './index.module.css';



function App() {
    return (
        <>
        <View className={style['first-view']}>
            <Text className={style["first-text"]}>
                Well just import some text here
            </Text>
        </View>
        </>
    )
}

export default App