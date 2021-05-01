import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      {/* logo/top section */}
      <View style={styles.topSection}>
        <Pressable
          style={{
            // backgroundColor: "#ae7a84",
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 5,
            flex: 0,
          }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          {/* <Text style={{ color: "#fff" }}>Sign In</Text> */}
        </Pressable>
        <Image
            style={styles.image}
            source={require("../../assets/bp.jpg")}
          />
        {/* <Fontisto name="flash" size={34} color="brown" /> */}
        {/* <Text>Logo</Text> */}
        {/* <Image style={styles.image} source={require("../../assets/logo.png")} /> */}
      </View>

      {/* description/middle section */}
      <View style={styles.middleSection}>
        <Text style={styles.description}>
          {/* BUSINESS POINT IS A MOBILE APPLICATION WHICH CONNECTS MICRO-SERVICES
          WITH INVESTORS, PEOPLE DISCOVER NEW EXCITING MICRO BUSINESSES AND THEY
          RATE THEIR SERVICES AND EVEN INVEST IN THEM. */}
          Business Point is a Mobile Application Which Connects Micro-Services
          With Investors. People Discover New Exciting Micro Businesses And They
          Rate Their Services And Even Invest In Them.
        </Text>

       
      </View>

      {/* buttons/bottom section */}
      <View style={styles.bottomSection}>
        <Pressable
          style={{
            backgroundColor: "#ae7a84",
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 5,
            marginBottom: 15,
            minWidth: 150,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={{ color: "#fff" }}>Upload Business</Text>
        </Pressable>
        <Pressable
          style={styles.rate}
          onPress={() => navigation.navigate("AllBuisness")}
        >
          <Text>Rate Businesses</Text>
        </Pressable>
      </View>

      {/* <View style={styles.info}>  */}
      {/* </View> */}
      {/* <View style={styles.contactInfo}>
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
        */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    // alignItems:"center",
    backgroundColor: "lightgrey",
  },

  topSection: {
    flex: 2,
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  middleSection: {
    flexGrow: 5,
    padding: 40,
  },

  description: {
    fontSize: 22,
    fontWeight: "600",
  },

  bottomSection: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  register: {
    backgroundColor: "#ae7a84",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },

  image: {
    marginTop:25,
    alignSelf: "center",
    width: 80,
    height: 75,
    borderRadius: 80,
    // backgroundColor:"#ae7a84"
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
