import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackExample from "../screens/StackExample";
import { TabBarNavigation } from "./TabBarNavigation";

const Stack = createNativeStackNavigator()

export function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="TabBar">
      <Stack.Screen 
        name="StackExample"
        component={StackExample}
      />
      <Stack.Screen 
        name="TabBar"
        component={TabBarNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}