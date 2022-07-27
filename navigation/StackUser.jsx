import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../components/user/Signup'
import SignIn from '../components/user/SignIn'


const Stack = createNativeStackNavigator();

export default function User() {

    return (

        <Stack.Navigator 
        // initialRouteName="LogIn"
        >
              <Stack.Screen name="LogIn" component={SignIn} /> 
              <Stack.Screen name="SignUp" component={SignUp} /> 
        </Stack.Navigator>

    )
}