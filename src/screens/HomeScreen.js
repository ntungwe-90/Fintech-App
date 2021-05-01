import React, {useEffect, useState} from "react";
import { Text, View, StyleSheet, ScrollView, Pressable, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";
import Buisness from "./buisness";
import firebase from "../firebase/firebase";

const ScreenHeader = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#ae7a84",
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
      }}
    >
      <Text
        style={{
          position: "absolute",
          color: "#fff",
          fontSize: 22,
        }}
      >
        Business Profile
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingRight: 10,
          marginLeft: "auto",
          width: 48 + 25,
          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={() => navigation.navigate("UploadBuisness")}>
          <Feather name="plus" size={24} color="#fff" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("MyProfile")}>
          <Feather name="user" size={24} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

function HomeScreen(props) {
  const uploaded = props.mybuisnesses
  // const [loading, setLoading]=useState(true)

  return (
    <View>
      <ScreenHeader navigation={props.navigation} />
      {uploaded.length ? (
        <FlatList
          data={uploaded}
          renderItem={({ item }) => <Buisness {...item} navigation={props.navigation} />}
          keyExtractor={(item) => item.id}
        />
      // ) : loading ? (
      //   <ActivityIndicator size="large" color="#ae7a84"/>
      ) : (
        <Text style={{
          marginTop: 30,
          alignSelf: "center",
        }}>
          You don't have any businesses uploaded yet
        </Text>
      )}
    </View>
  );
}

export default connect((state) => ({ ...state }))(HomeScreen);
