import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function BusinessOwnerScreen({ navigation }) {
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
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}>Micheal Jordan</Text>
        </View>
        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Business Name</Text>
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}>
            Jordan's electronics
          </Text>
        </View>

        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Rating</Text>
          <Text style={{ color: "yellow", fontSize: 20 }}>******</Text>
        </View>

        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Location</Text>
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}>Accra</Text>
        </View>

        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Phone</Text>
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}> +00145668723 </Text>
        </View>

        <View style={styles.labelInfo}>
          <Text style={{ color: "#3b76ad" }}>Start Capital</Text>
          <Text style={{ color: "#a6a6a6", fontSize: 20 }}>50000</Text>
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
});
