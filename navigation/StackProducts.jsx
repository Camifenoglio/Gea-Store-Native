import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/Products'
import Details from '../screens/Details';
import Signup from '../components/user/Signup'


const Stack = createNativeStackNavigator();

export default function ProductsStackNavigation() {

    return (

        <Stack.Navigator>
            <Stack.Screen name="products" component={Products}
                options={{ headerShown: false }} />
            <Stack.Screen name="Product" component={Details} />
                    
        </Stack.Navigator>

    )
}
