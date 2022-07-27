import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../components/user/Signup'
import SignIn from '../components/user/SignIn'
import LogOut from '../components/user/LogOut'
import { useSelector } from 'react-redux'


const Stack = createNativeStackNavigator();

export default function User() {
    const user = useSelector(store => store.usersReducers.user)
    console.log(user)

    return (

        <Stack.Navigator 
        // initialRouteName="LogIn"
        >
            {!user ? 
            <>
            <Stack.Screen name="LogIn" component={SignIn} /> 
            <Stack.Screen name="SignUp" component={SignUp} />
            </>
            :
            <Stack.Screen name="LogOut" component={LogOut} /> 
            }
        </Stack.Navigator>

    )
}