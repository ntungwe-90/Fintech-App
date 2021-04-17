import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from '@expo/vector-icons';

export default function Products({ productname, price }) {
  return (
    <View style={styles.container}>
     
      
      <View style={styles.infoContainer}>
        <Text style={styles.text1}>{productname}</Text>
        </View>

      <View style={styles.priceContainer}>
        <Text style={styles.text1}>{price}</Text>
      </View>

      <View style={styles.iconContainer}>
        <AntDesign name="delete" size={24} color="#3b76ad" />
      </View>

      {/* <Ionicons name="add-circle-outline" size={24} color="black" /> */}
      
    </View>
    
  );
}

const styles = StyleSheet.create({
   container: {
    flexDirection: "row",
    flex:1,
    padding:15,
//  alignSelf:"center",
//  marginVertical:20,
//  marginHorizontal:20
    //  justifyContent: "space-around",
  
   },

   infoContainer:{
flex:1,
alignItems:"center"
   },

   priceContainer:{
flex:1,
alignItems:"center"
   },

   iconContainer:{
flex:1,
alignItems:"center"
   },
text1:{
  fontWeight:"bold",
  fontSize:20
},


});
