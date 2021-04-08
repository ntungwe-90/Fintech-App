import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function DecisionPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/logo.png")}
      />
      <View style={styles.info}>
        <Text style={styles.contactInfo}>
          {" "}
          DISCOVER AND INVEST IN NEW MICRO BUINESSES
        </Text>
      </View>
      <View>
        {/* <Text style={styles.message}>Discover and invest in New Micro Buisnesses</Text> */}
        <Image
          style={styles.image1}
          source={require("../../assets/Screen1.png")}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <View style={styles.start}>
          <Text style={styles.text}>GET STARTED</Text>
          <Text style={styles.started}></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  message: {
    alignSelf: "center",
    fontSize: 15,
  },
  image: {
    // marginHorizontal: 30,
    alignSelf: "center",
    width: 100,
    height: 80,
    borderRadius: 80,
  },
  info: {
    flexDirection: "column",
    alignSelf: "center",
  },
  image1: {
    height: 200,
    width: "100%",
  },
  contactInfo: {
    fontSize: 15,
    color: "#3b76ad",
    fontWeight: "bold",
  },
  start: {
    flexDirection: "column",
    alignSelf: "center",
  },
  text: {
    color: "#3b76ad",
  },
  started: {
    height: 2,
    width: 90,

    backgroundColor: "#3b76ad",
    fontWeight: "bold",
  },
});
