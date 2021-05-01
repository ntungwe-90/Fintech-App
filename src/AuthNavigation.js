import React from "react";
import { Ionicons } from "@expo/vector-icons";
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
import {TouchableOpacity, Text} from "react-native";


const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="LandingPage"
      screenOptions={{
        title: null,
        // header: () => null,
        headerStyle: {
          backgroundColor: "#ae7a84",
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
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="About"
        component={About}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          // header: () => null,
          headerStyle: {
            backgroundColor: "transparent",
            // elevation: 0,
          },
          headerBackImage: () => (
            <Ionicons name="md-arrow-back" size={24} color="black" />
          ),
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          // header: () => null,
          headerStyle: {
            backgroundColor: "transparent",
            // elevation: 0,
          },
          headerBackImage: () => (
            <Ionicons name="md-arrow-back" size={24} color="black" />
          ),
        }}
      />
      <Stack.Screen name="DecisionPage" component={DecisionPage} />
      
      <Stack.Screen
        name="AllBuisness"
        options={{
          title: "All Business",
          // headerRight: () => (
          //   <TouchableOpacity style={{ marginRight: 20 }} >
          //     <Text
          //       style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
          //     >
          //       Log Out
          //     </Text>
          //   </TouchableOpacity>
          // ),
        }}
        component={AllBuisness}
      />
      
      <Stack.Screen
        name="BuisnessDetails1"
        options={{
          title: "BuisnessDetails1",
          // headerRight: () => (
          //   <TouchableOpacity style={{ marginRight: 20 }} >
          //     <Text
          //       style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
          //     >
          //       Log Out
          //     </Text>
          //   </TouchableOpacity>
          // ),
        }}
        component={BuisnessDetails1}
      />
      
      <Stack.Screen
        name="BuisnessDetails2"
        options={{
          title: "BuisnessDetails2",
          // headerRight: () => (
          //   <TouchableOpacity style={{ marginRight: 20 }} >
          //     <Text
          //       style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
          //     >
          //       Log Out
          //     </Text>
          //   </TouchableOpacity>
          // ),
        }}
        component={BuisnessDetails2}
      />
      
    </Stack.Navigator>
  );
}
