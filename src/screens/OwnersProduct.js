import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Products from "../screens/Products";

export default function OwnersProduct() {
  const products = [
    { productname: "laptop", price: "1500" },
    { productname: "AC", price: "2000" },
    { productname: "phones", price: "1000" },
    { productname: "chargers", price: "500" },
    { productname: "fans", price: "150" },
    { productname: "Tv", price: "1200" },
    { productname: "fridge", price: "700" },
  ];
//   return (
//     <View>
//       <FlatList
//         data={products}
//         renderItem={({ item }) => {
//           return <Products productname={item.productname} price={item.price} />;
//         }}
//         keyExtractor={(item) => item.price}
//       />
//     </View>
//   );
// }

return (
  <View>
   <FlatList
   data={products}
   renderItem={({item}) =>{
       return <Products  productname={item.productname} price={item.price} />
   }}
   keyExtractor={(item) =>item.price}
   />
  </View>
);
}

