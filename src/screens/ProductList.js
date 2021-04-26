import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Rating } from "react-native-ratings";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

export default function ProductList() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text>My Products</Text>
          <Text style={styles.main}>Main</Text>
          <Text style={styles.main}>Categories</Text>
        </View>

        <View style={styles.photos}>
          <Image
            source={require("../../assets/mouse.jpg")}
            style={styles.image}
          />
          <Image
            source={require("../../assets/mouse.jpg")}
            style={styles.image}
          />
          <Image
            source={require("../../assets/phone.jpg")}
            style={styles.image}
          />
          <Image
            source={require("../../assets/phonemoney.jpg")}
            style={styles.image}
          />
          <Image
            source={require("../../assets/Screen1.png")}
            style={styles.image}
          />
          <Image
            source={require("../../assets/cofee.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.text2}>
          <Text>phones</Text>
          <Text>Laptops</Text>
          <Text>Tv</Text>
          <Text>Ac</Text>
          <Text>fan</Text>
          <Text>fridges</Text>
        </View>

        <View>
          <Image
            source={require("../../assets/dryer.jpg")}
            style={styles.image1}
          />
          <View style={styles.priceButton}>
            <Text style={styles.price}>20% off</Text>
            {/* <Text style={{ marginTop: 25, fontSize: 20, fontWeight: "bold" }}>
              Burgers story
            </Text> */}
          </View>
          <View style={styles.others}>
            <Rating readonly={true} imageSize={25} tintColor="#e6ebe6" />
            <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
              burgers
            </Text>
            <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
              snacks
            </Text>
            <Text style={{ fontSize: 15, color: "grey", fontWeight: "bold" }}>
              $$$$
            </Text>
          </View>
          <Image
            source={require("../../assets/casino2.jpg")}
            style={styles.image2}
          />
          <View style={styles.iconsBottom}>
            <FontAwesome name="cutlery" size={24} color="grey" />
            <EvilIcons name="search" size={24} color="grey" />
            <FontAwesome name="heart" size={24} color="grey" />
            <Foundation name="torsos-male-female" size={24} color="grey" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: "white",
  },
  icons: {
    flexDirection: "row",
    marginVertical: 25,
    justifyContent: "space-between",
  },

  button: {
    height: 35,
    width: 130,
    borderRadius: 25,
    backgroundColor: "#f5f3ed",
    alignContent: "center",
  },
  menuLeft: {
    marginHorizontal: 7,
  },

  heart: {
    marginHorizontal: 5,
  },
  photos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 20,
  },
  text2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  main: {
    fontSize: 30,
    fontWeight: "bold",
  },
  heading: {
    flexDirection: "column",
    marginHorizontal: 10,
    marginBottom: 10,
  },

  image1: {
    height: 180,
    width: 340,
    borderRadius: 25,
    marginVertical: 40,
    marginHorizontal: 5,
    alignSelf: "center",
  },
  priceButton: {
    position: "absolute",
    marginVertical: 65,
    marginHorizontal: 15,
    marginTop: 165,
    height: 50,
    width: 130,
    borderRadius: 25,
    backgroundColor: "white",
  },
  price: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 12,
    fontSize: 20,
  },

  others: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  image2: {
    height: 180,
    width: 340,
    borderRadius: 25,
    marginVertical: 8,
    alignSelf: "center",
  },
  iconsBottom: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
