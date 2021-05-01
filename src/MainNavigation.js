import React from "react";
import { TouchableOpacity, Text, View, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
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
import BusinessOwner from "./screens/BusinessOwnerScreen";
import OwnersProduct from "./screens/OwnersProduct";
import Products from "./screens/Products";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProductList from "./screens/ProductList";
import AddProduct from "./screens/AddProduct";
import { logout } from "./redux/actions";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Tab.Screen
        name="Products"
        // component={Products}
        options={{
          tabBarLabel: "Business Info",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="BusinessOwner"
        // component={BusinessOwner}
        component={HomeScreen}
      />

      {/* <Tab.Screen
        options={{
          tabBarLabel: "My Products",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
            // <MaterialCommunityIcons name="bell"
          ),
        }}
        name="OwnersProduct"
        component={OwnersProduct}
      /> */}

      <Tab.Screen
        options={{
          tabBarLabel: "All Businesses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
            // <MaterialCommunityIcons name="bell"
          ),
        }}
        name="AllBuisness"
        component={AllBuisness}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function Navigation(props) {
  console.log({props})
  return (
    <Stack.Navigator
      // initialRouteName={props.newUser ? "UploadBuisness" : "OwnersProduct"}
      initialRouteName={props.newUser ? "UploadBuisness" : "BusinessOwner"}
      // BusinessOwner
      //  AllBuisness
      screenOptions={{
        title: null,

        headerStyle: {
          backgroundColor: "#ae7a84",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
      {/* <Stack.Screen
          options={{
            header: () => null,
          }}
          name="LandingPage"
          component={LandingPage}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="DecisionPage" component={DecisionPage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
    
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}

      <Stack.Screen
        name="AllBuisness"
        options={{
          title: "All Business",
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 20 }} onPress={logout}>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Log Out
              </Text>
            </TouchableOpacity>
          ),
        }}
        component={AllBuisness}
      />

      <Stack.Screen
        options={{
          title: "Business Details",
        }}
        name="BuisnessDetails1"
        component={BuisnessDetails1}
        />

      <Stack.Screen
        options={{
          title: "Business Details2",
        }}
        name="BuisnessDetails2"
        component={BuisnessDetails2}
      />

      <Stack.Screen
        options={{
          title: "Upload Business",
        }}
        name="UploadBuisness"
        component={UploadBuisness}
      /> 

      <Stack.Screen
        options={{
          title: "Business profile",
          header: () => null,
        }}
        name="BusinessOwner"
        component={MyTabs}
      />

      <Stack.Screen
        name="MyProfile"
        options={{
          title: "My profile"
        }}
        component={BusinessOwner}
      />

      {/* <Stack.Screen name="OwnerProduct" component={OwnersProduct} /> */}
      <Stack.Screen
        options={{
          title: "products",
        }}
        name="Products"
        component={Products}
      />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen
        options={{
          title: "Add Items",
        }}
        name="AddProduct"
        component={AddProduct}
      />
    </Stack.Navigator>
  );
}

export default connect((state) => ({ newUser: state.newUser }))(Navigation);
