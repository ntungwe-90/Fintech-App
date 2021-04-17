import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/logo.png")}
      />
      <View style={styles.info}>
        <Text style={styles.contactInfo}> WELCOME TO BUSINESS POINT</Text>
        
      </View>

      {/* <View style={styles.info}>  */}
       <Text style={styles.contactInfo}>
          BUSINESS POINT IS A MOBILE APPLICATION WHICH CONNECTS MICRO-SERVICES
          WITH INVESTORS, PEOPLE DISCOVER NEW EXCITING MICRO BUSINESSES AND THEY
          RATE THEIR SERVICES AND EVEN INVEST IN THEM.
        </Text>
       {/* </View> */}
      <View style={styles.contactInfo}>
        <Text style={styles.contactInfo}>NEW HERE? SIGN IN OR REGISTER</Text>
      </View>
      <View style={styles.register}>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.nextText}>REGISTER</Text>
          <Text style={styles.started}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.nextText}>SIGN IN</Text>
          <Text style={styles.start}></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextbutton}
          onPress={() => navigation.navigate("DecisionPage")}
        >
          <Text style={styles.nextText}>RATE</Text>
          <Text style={styles.star}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    // alignItems:"center",
    backgroundColor:"lightgrey"
  },
  image: {
    alignSelf: "center",
    width: 100,
    height: 80,
    borderRadius: 80,
  },
  info: {
    flexDirection: "column",
    alignSelf: "center",
  },
  contactInfo: {
    fontSize: 15,

    marginHorizontal: 24,
    color: "black",
  },
  register: {
    // flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  started: {
    height: 2,
    width: 70,
    backgroundColor: "#3b76ad",
    fontWeight: "bold",
  },

  start: {
    height: 2,
    width: 53,
    backgroundColor: "#3b76ad",
    fontWeight: "bold",
  },

  star: {
    height: 2,
    width: 40,
    backgroundColor: "#3b76ad",
    fontWeight: "bold",
  },

  nextText: {
    fontSize: 15,
    color: "#3b76ad",
    fontWeight: "bold",
  },
});
