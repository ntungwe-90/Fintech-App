import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function DecisionPage({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/logo.png")}
      />
      {/* <View style={styles.info}>
            <Text style={styles.contactInfo}> WELCOME TO BUISNESS POINT</Text>
            </View> */}

      <TouchableOpacity>
        {/* <View  style={styles.info}>
                    <Text style={styles.contactInfo}>DISCOVER BUISNESSES</Text>
                </View> */}
        <View>
          <TouchableOpacity style={styles.buttonContainer1} onPress={()=>navigation.navigate("AllBuisness")}>
            <Text style={styles.buttonText}>DISCOVER BUISNESSES</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles.buttonContainer2} onPress={()=>navigation.navigate("RegisterScreen")}>
        <View>
          <Text style={styles.buttonText}>UPLOAD BUISNESSES</Text>
        </View>
      </TouchableOpacity>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:60,
    marginHorizontal: 30,
    // justifyContent:"space-around",
    // justifyContent: "space-evenly",
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
  buttonContainer1: {
    height: 50,
    backgroundColor: "#3b76ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical:90
  },
  buttonContainer2: {
    height: 50,
    backgroundColor: "#3b76ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
   marginVertical:5

  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  contactInfo: {
    fontSize: 15,
    alignSelf: "center",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    fontSize: 20,
    height: 50,
    marginTop: 20,
  },

  nextbutton:{
    height: 50,
    width:150,
    backgroundColor: "#3b76ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 50,
  },
  nextText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
