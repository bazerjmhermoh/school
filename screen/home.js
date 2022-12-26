import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '../component/searchbar'

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 0 }}>

            <SearchBar />
        </SafeAreaView>

    )
};
