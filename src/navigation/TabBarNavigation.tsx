import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import React from "react";
import About from "../screens/About";
import Home from "../screens/Home";
import { Icon } from "./styles";

const Tab = createBottomTabNavigator()

export function TabBarNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="home" size={25} color="#c9184a" />
          ),
          tabBarLabelStyle: {
            padding: 5,
            fontSize: 12,
            color: "#c9184a",
            fontWeight: 'bold',
          }                  
        }}        
      />
      <Tab.Screen 
        name="About"
        component={About}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="text-document-inverted" size={25} color="#c9184a" />
          ),
          tabBarLabelStyle: {
            padding: 5,
            fontSize: 12,
            color: "#c9184a",
            fontWeight: 'bold',
          }                  
        }}
      />
    </Tab.Navigator>
  )
}