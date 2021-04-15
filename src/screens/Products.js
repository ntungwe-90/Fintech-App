import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Products({ productname, price }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.text1}>{productname}</Text>
      </View>

      <View>
        <Text style={styles.text1}>{price}</Text>
      </View>

      <View style={styles.icon}>
        <AntDesign name="delete" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   marginVertical: 20,
  // },
  flexDirection:"row",
  marginHorizontal:20,
  alignItems:"center",
  marginVertical:10,
  justifyContent:"space-around"
   },

   infoContainer:{
    justifyContent:"center",
    marginHorizontal:15,
   
},
text1:{
  fontWeight:"bold",
  fontSize:17
},
icon:{
 
}
});
