import { View, Text } from 'react-native';
import React, { useState } from 'react';
import * as SQLite from 'expo-sqlite';

export default function Dropdown(props) {
    const input = props.moh;
    const [out, setout] = useState();


    const db = SQLite.openDatabase('mom.db');
    db.transaction(tx => {
        tx.executeSql(
            'select * from ali', [],
            (tx, res) => {
                var temp = [];

                for (let i = 0; i < res.rows.length; i++) {
                    temp.push(res.rows.item(i));
                }
                setout({ ali: temp });
            }
        );
    })
    console.log(out);
    return (
        <View>
            <Text>{input}</Text>
        </View>
    )
}

/**
 * 
    db.transaction(tx => {
        tx.executeSql(
            'select * from ali', [],
        );
    })

 */