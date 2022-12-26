import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Input from '../screen/Input';
import Outout from '../screen/Outout';


const Tab = createMaterialTopTabNavigator();

function Mybe() {
    return (
        console.log("ali")
        // <Tab.Navigator>
        //   <Tab.Screen name="Teacher" component={Input} />
        // <Tab.Screen name="Manager" component={Outout} />
        //</Tab.Navigator>
    );
}