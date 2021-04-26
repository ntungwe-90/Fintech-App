import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";

export default function Buisness({ navigation, ...props }) {
  const { name, products, rating, rate, image } = props;
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
        resizeMethod="auto"
        resizeMode="center"
      />
      <View style={styles.details_container}>
        <Text style={styles.title} numberOfLines={1}>
          {name}
        </Text>
        <Text>{products}</Text>
        <View>
          <Rating
            readonly={true}
            imageSize={15}
            tintColor="#e6ebe6"
            style={{ paddingVertical: 10, alignSelf: "flex-start" }}
          />
        </View>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.rate_button}
          onPress={() => navigation.navigate("BuisnessDetails1", props)}
        >
          <Text style={{ color: "white" }}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#eee",
    padding: 15,
  },

  image_container: {
    // flex: 2,
  },

  details_container: {
    // flex: 6,
    flex: 1,
  },

  button_container: {
    // flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
  },

  rate_button: {
    backgroundColor: "#ae7a84",
    padding: 16,
    borderRadius: 5,
  },

  image: {
    // flex: 2,
    height: 60,
    width: 60,
    alignSelf: "center",
    marginHorizontal: 2,
    borderRadius: 100,
    marginRight: 10,
  },
});
