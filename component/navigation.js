import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Home from '../screen/home'
import Mybe from './HeaderTabs'

import Edite from '../screen/edite'
import Search from '../screen/search';
import { createStackNavigator } from '@react-navigation/stack';
const screenOptions = {
    headerShown: false,
};
const Tab = createBottomTabNavigator();



export default function Tabapp() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Tab.Screen name="HOME" component={Home} />
            <Tab.Screen name='search' component={Search} />
            <Tab.Screen name='edite' component={Edite} />

        </Tab.Navigator>

    );
}