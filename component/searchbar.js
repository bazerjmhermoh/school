import React from 'react'
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Dropdown from './Dropdown';
/**
 
 1 = print text from input
 2 = input it to function 
 */
export default function searchbar() {
    const [moh] = useState(["moh"]);
    const [input, setinput] = useState(moh);
    const [search, issearch] = useState(false);
    const onsearch = (text) => {
        console.log(text)
        if (text) {
            issearch(true)
            setinput(text)
        }
        else {

            issearch(false)
            setinput(moh)
        }
    }
    return (

        <View style={styles.con}>
            <TextInput style={styles.text}
                placeholder="Search"
                placeholderTextColor={"white"}
                onChangeText={onsearch}
            />

            {
                search &&
                <Dropdown moh={input} />

            }
        </View>
    );

}
const styles = StyleSheet.create({
    con: {
        marginTop: 100,
        marginLeft: 20,

    },
    text: {
        backgroundColor: 'gray',
        width: '95%',
        height: 50,
        borderRadius: 4,
        fontSize: 30,
        fontWeight: 'blod'
    }
});