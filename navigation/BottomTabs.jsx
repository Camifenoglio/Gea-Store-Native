import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ProductsStackNavigation from './Stack';
import User from '../screens/User';
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
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

            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),

        }}
      />
      <Tab.Screen name="User" component={User}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />

          ),

        }}
      />
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