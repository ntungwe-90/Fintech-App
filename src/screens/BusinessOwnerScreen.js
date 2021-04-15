import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function BusinessOwnerScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>MY BUSINESS</Text>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.ownerinfo}>
        <Text style={styles.owner}>fullName</Text>
        <Text style={styles.owner}>BusinessName</Text>
        <Text style={styles.owner}>ratings</Text>
        <Text style={styles.owner}>location</Text>
        <Text style={styles.owner}>tell</Text>
        <Text style={styles.owner}>start capital</Text>
      </View>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 50,
  },

  header: {
    fontSize: 15,
    alignSelf: "center",
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 80,
  },

  ownerinfo: {
    marginTop: 50,
  },

  owner: {
    fontSize: 25,
  },
  nextbutton: {
    height: 50,
    width: 150,
    backgroundColor: "#3b76ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 30,
    // marginVertical: 50,
    // marginHorizontal:50
  },
  nextText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
