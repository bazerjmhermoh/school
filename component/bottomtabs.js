import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default function Bottomtabs() {
    return (
        <View style={{
            alignItems: "center",
            flexDirection: "row",
            margin: 600,
            marginHorizontal: 30,
            justifyContent: "space-between"
        }}>
            <TouchableOpacity onPress={all}>
                <Icon icon="home" Text="Home" />
            </TouchableOpacity>
            <TouchableOpacity onPress={all}>
                <Icon icon="search" Text="search" />
            </TouchableOpacity>
            <TouchableOpacity onPress={all}>
                <Icon icon="pen" Text="Input" />
            </TouchableOpacity>
        </View>
    )
}
const Icon = (props) => (


    <View>
        <FontAwesome5 name={props.icon} size={25}
            style={{ alignSelf: "center", marginBottom: 3 }} />
        <Text>{props.Text}</Text>
    </View>

);

const all = () => alert("hallo");