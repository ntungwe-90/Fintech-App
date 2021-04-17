import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Products from "../screens/Products";
import { Ionicons } from '@expo/vector-icons';

export default function OwnersProduct({navigation}) {
  const products = [
    { productname: "laptop", price: "1500" },
    { productname: "AC     ", price: "2000" },
    { productname: "Phones", price: "1000" },
    { productname: "Chargers", price: "5000" },
    { productname: "Fan   ", price:   "1500 " },
    { productname: "Tv   ", price: "1200" },
    { productname: "Fridge", price: "700" },
  ];

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return <Products productname={item.productname} price={item.price} />;
        }}
        keyExtractor={(item) => item.price}
      />

      <View >
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
      <Ionicons name="add-circle-outline" size={54} color="#3b76ad" style={styles. icon} />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon:{
    marginTop:50,
    alignSelf:"flex-end"

  }
})