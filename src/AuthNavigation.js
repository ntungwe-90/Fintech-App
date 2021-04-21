import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./screens/LandigPage";
import About from "./screens/About";
import DecisionPage from "./screens/DecisionPage";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Buisness from "./screens/buisness";
import AllBuisness from "./screens/AllBuisness";
import BuisnessDetails1 from "./screens/BuisnessDetails1";
import BuisnessDetails2 from "./screens/BuisnessDetails2";
import UploadBuisness from "./screens/UploadBuisness";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{
        title: null,
        // header: () => null,
        headerStyle: {
          backgroundColor: "#3b76ad",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="LandingPage"
        component={LandingPage}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="DecisionPage" component={DecisionPage} />
    </Stack.Navigator>
  );
}
