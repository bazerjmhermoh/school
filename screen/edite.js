import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import Mybe from '../component/HeaderTabs'

import Input from '../screen/Input';
import Outout from '../screen/Outout';

const Tab = createMaterialTopTabNavigator();
export default function Edite() {
    return (

        <Tab.Navigator style={{ paddingTop: 30 }}>
            <Tab.Screen name="Teacher" component={Input} />
            <Tab.Screen name="Manager" component={Outout} />
        </Tab.Navigator>


    );
}