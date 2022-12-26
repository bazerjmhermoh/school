import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Outout() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: Colors.blacks, fontSize: 40, fontWeight: 'bold' }}>
          manager
        </Text>
        <Text style={{ color: Colors.gray, fontSize: 20, fontWeight: 'bold' }}>
          input  manager infotmation
        </Text>

        <TextInput style={styles.input} placeholder="اسم المدرسة" activeUnderlineColor="yellow"
          underlineColor="red" />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <View style={{ marginVertical: 20, }}></View>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
});