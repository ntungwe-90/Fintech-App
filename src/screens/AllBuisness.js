import React from "react";
import { FlatList, scrowView, Text, View, StyleSheet, Image } from "react-native";
import Buisness from './buisness';

export default function AllBuisness({navigation}) {
  const buisness = [
    {
      image: require("../../assets/saloon.jpg"), 
      name: "SALON",
      products: "manicure,pendicure massage",
      description: "WE OFFER MANICURES, PENDICURES, MASSAGES AND MOBILE MONEY",
      Rating: "34",
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
    },
    {
      image: require("../../assets/cafe.jpg"),   
      name: "Restaurant",
      products: "drinks food,dance",
      Rating: "34",
      rate: "rate",
    },
    {
      image: require("../../assets/casino.jpg"),
      name: "Casino",
      products: "poker, games, drinks",
      Rating: "34",
      rate: "rate",
    },
    {
      image: require("../../assets/s1.jpg"),
      name: "Electronics",
      products: "Laptops, fridges, Irons",
      rating: "34",
      rate: "rate",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.image_conainer}>
        <Image source={require('../../assets/logo.png')} style={styles.image5} />
      </View>
      <View style={styles.flatlist}>
      <FlatList
         data={buisness}
         renderItem={({ item }) => {
           return (
             <Buisness
               {...item}
               navigation={navigation}
             />
           );
         }}
         keyExtractor={(item, index) => `${item.name}-${index}`}
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
  },
  flatlist: {
    flex: 8,
  }
})