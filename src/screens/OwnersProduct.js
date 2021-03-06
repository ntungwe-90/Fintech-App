import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Products from "../screens/Products";
import { Ionicons } from "@expo/vector-icons";

export default function OwnersProduct({ navigation }) {
  const products = [
    { productname: "laptop", price: "1500" },
    { productname: "AC     ", price: "2000" },
    { productname: "Phones", price: "1000" },
    { productname: "Chargers", price: "5000" },
    { productname: "Fan   ", price: "1500 " },
    { productname: "Tv   ", price: "1200" },
    { productname: "Fridge", price: "700" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return <Products productname={item.productname} price={item.price} />;
        }}
        keyExtractor={(item) => item.price}
      />

      <View style={styles.mainIcon}>
        <TouchableOpacity onPress={() => navigation.navigate("AddProduct")}>
          <Ionicons
            name="add-circle-outline"
            size={54}
            color="#ae7a84"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainIcon: {
    position: "absolute",
    bottom: 30,
    right: 20,
  },
  icon: {
    marginTop: 50,
    alignSelf: "flex-end",
  },
});
