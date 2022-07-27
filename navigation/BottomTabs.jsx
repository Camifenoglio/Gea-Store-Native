import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Shopping from '../screens/Shopping';
import ProductsStackNavigation from './StackProducts';
import User from './StackUser'
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { Fontisto } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const user = useSelector(store => store.usersReducers.user)

  return (

    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { height: 80, backgroundColor: '#3f5123', justifyContent: 'center' },
        tabBarActiveTintColor: '#E0EFC5',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontSize: 20,
          fontFamily: 'AlegreyaSans_400Regular'

        }

      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (

            <Ionicons name="ios-home" size={size} color={color} />
          ),
          tabPress: 'useScrollToTop'
        }}
      />
      <Tab.Screen name="Products" component={ProductsStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="shopping-store" size={size} color={color} />

            // <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),

        }}
      />

            <Tab.Screen name="Cart" component={Shopping}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
          
            <MaterialIcons name="shopping-cart" size={size+3} color={color} />

          ),

        }}
        />

      {user ?

      <Tab.Screen name={user.fullName} component={User}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-check" size={size} color={color} />

          ),

        }} 
      /> : 
      <Tab.Screen name="User" component={User}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          )

        }} 
      />

      }
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 8,
    height: 40,
    width: 40
  },
  image2: {
    marginTop: 10,
    height: 60,
    width: 60

  }

});