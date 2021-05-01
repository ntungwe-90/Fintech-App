import React from "react";
import {
  FlatList,
  scrowView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { connect } from "react-redux";
import Buisness from "./buisness";
// import {buisness} from "../dummy-data"

const buisness = [
  {
    image: require("../../assets/saloon.jpg"),
    name: "SALON",
    products: "manicure,pendicure massage",
    description: "WE OFFER MANICURES, PENDICURES, MASSAGES AND MOBILE MONEY",
    rating: 3,
    rate: "rate",
    photos: [
      require("../../assets/m2.jpg"),
      require("../../assets/s1.jpg"),
      require("../../assets/makeup.jpg"),
      require("../../assets/polish.jpg"),
      require("../../assets/makeup2.jpg"),
      require("../../assets/massage.jpg"),
    ],
    moreImages: [
      require("../../assets/m2.jpg"),
      require("../../assets/saloon2.jpg"),
    ],
    contact: {
      location: "Abeka, Circle, Achimota.",
      tel: "0259334563",
      email: "saloonD@gmail.com",
    },
    capital: 100000,
    dummy: true,
  },
  {
    image: require("../../assets/cafe.jpg"),
    name: "Restaurant",
    products: " food, drinks, dance",
    description: "WE Specialise in both continental and traditional meals",
    rating: 4,
    rate: "rate",

    photos: [
      require("../../assets/burgers1.jpg"),
      require("../../assets/friedrice.jpg"),
      require("../../assets/fruits.jpg"),
      require("../../assets/paster1.jpg"),
      require("../../assets/salad.jpg"),
      require("../../assets/mixed.jpg"),
    ],
    moreImages: [
      require("../../assets/burgers1.jpg"),
      require("../../assets/cheese.jpg"),
    ],
    contact: {
      location: "lagon, kumasi, redcomadina.",
      tel: "0257423843",
      email: "restuaflash@gmail.com",
    },
    capital: 5000,
    dummy: true,
  },
  {
    image: require("../../assets/casino2.jpg"),
    name: "Hotel",
    products: "kitchen, rooms, drinks",
    rating: 2,
    rate: "rate",

    photos: [
      require("../../assets/bed.jpg"),
      require("../../assets/hotel.jpg"),
      require("../../assets/hotel2.jpg"),
      require("../../assets/casino.jpg"),
      require("../../assets/casino2.jpg"),
      require("../../assets/mixed.jpg"),
    ],
    moreImages: [
      require("../../assets/h1.jpg"),
      require("../../assets/reception.jpg"),
    ],
    contact: {
      location: "achimota, kozoa, madina.",
      tel: "05944329",
      email: "hotelez@gmail.com",
    },
    capital: 5000,
    dummy: true,
  },
  {
    image: require("../../assets/s1.jpg"),
    name: "Electronics",
    products: "Laptops, fridges, Irons",
    rating: 3,
    rate: "rate",
    photos: [
      require("../../assets/bed.jpg"),
      require("../../assets/hotel.jpg"),
      require("../../assets/hotel2.jpg"),
      require("../../assets/casino.jpg"),
      require("../../assets/casino2.jpg"),
      require("../../assets/mixed.jpg"),
    ],
    moreImages: [
      require("../../assets/h1.jpg"),
      require("../../assets/reception.jpg"),
    ],
    contact: {
      location: "achimota, kozoa, madina.",
      tel: "05944329",
      email: "hotelez@gmail.com",
    },
    capital: 5000,
    dummy: true,
  },
];

function AllBuisness({ navigation, ...props }) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.image_conainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.image5}
        />
      </View> */}
      <View style={styles.flatlist}>
        <FlatList
          data={[...buisness, ...props.buisness]}
          renderItem={({ item }) => {
            return <Buisness {...item} navigation={navigation} />;
          }}
          keyExtractor={(item, index) => `${item?.name}-${index}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image_conainer: {
    flex: 2,
    alignItems: "center",
  },

  image5: {
    height: 100,
    width: 90,
    alignSelf: "center",
    marginHorizontal: 2,
    borderRadius: 50,
    marginTop: 10,
  },
  flatlist: {
    flex: 8,
  },
});

export default connect((state) => ({ buisness: state.buisness }))(AllBuisness);
