import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shopping from '../screens/Shopping';
import CreditCard from '../components/CreditCard';



const Stack = createNativeStackNavigator();

export default function Shop() {

    return (

        <Stack.Navigator 

        >
        <Stack.Screen name="shopping" component={Shopping} /> 

            <Stack.Screen name="Card" component={CreditCard} /> 

        </Stack.Navigator>

    )
}