import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import UploadBuisness from "./screens/UploadBuisness";
import BusinessOwner from "./screens/BusinessOwnerScreen";
import OwnersProduct from "./screens/OwnersProduct";
import Products from "./screens/Products";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProductList from "./screens/ProductList";
import AddProduct from "./screens/AddProduct";

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
        component={Products}
        options={{
          tabBarLabel: "Business Info",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="BusinessOwner"
        component={BusinessOwner}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "My Products",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
           
          ),
        }}
        name="OwnersProduct"
        component={OwnersProduct}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function Navigation(props) {
  return (
    <Stack.Navigator
      initialRouteName={"UploadBuisness"}
      screenOptions={{
        title: null,

        headerStyle: {
          backgroundColor: "#3b76ad",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
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
        }}
        name="BusinessOwner"
        component={MyTabs}
      />

      
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
