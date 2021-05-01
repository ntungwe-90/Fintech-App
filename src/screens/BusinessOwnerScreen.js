import React from "react";
import {connect} from "react-redux";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {loggedOut} from "../redux/actions";
import * as ImagePicker from "expo-image-picker";


function BusinessOwnerScreen({ navigation, ...props }) {
  console.log(props)
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>MY BUSINESS</Text>
          <Image
            style={styles.image}
            source={require("../../assets/suit.jpg")}
          />
        </View>

        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Full name</Text>
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}>Gloria Davis</Text>
        </View>
        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Business Name</Text>
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}>
            GLO's boutique
          </Text>
        </View>

        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Rating</Text>
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}>0</Text>
        </View>

        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Location</Text>
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}>Tesano</Text>
        </View>

        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Phone</Text>
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}> 0592286843 </Text>
        </View>

        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Start Capital</Text>
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}>5000gh</Text>
        </View>
        <View style={styles.nextbutton}>
        <TouchableOpacity
            onPress={props.loggedOut}
          >
            <Text style={styles.nextText}>Log out</Text>
          </TouchableOpacity>
          </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 10,
  },

  header: {
    fontSize: 15,
    alignSelf: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 80,
    alignSelf: "center",
  },

  labelInfo: {
    fontSize: 30,
    alignItems: "flex-start",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    marginBottom: 25,
  },

  button_container: {
    alignItems: "center",
    justifyContent: "center",
  },

  rate_button: {
    backgroundColor: "#3b76ad",
    padding: 16,
    borderRadius: 5,
  },

  nextbutton: {
    height: 50,
    width: 150,
    backgroundColor: "#ae7a84",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf:"center"
    // marginVertical: 50,
    // marginHorizontal:50
  },
  nextText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default connect (()=>({}), {loggedOut})(BusinessOwnerScreen)