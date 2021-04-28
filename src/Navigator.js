import React, { Fragment, useEffect } from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";
import AuthNavigation from "./AuthNavigation";
import firebase from "./firebase/firebase"
import { collection, getDocs } from "firebase/firestore";

function Navigator(props) {
  console.log(props.loggedIn)
  

  // const fetchBusinessesFromDatabase = async () => {
  //   const buisnessList = [];
  //   const querySnapshot = await getDocs(collection(firebase.firestore(), "buiness"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     buisnessList.push(doc.data())
  //   });
  //   props.dispatch({
  //     type: "POPULATE_BUISNESS",
  //     payload: buisnessList,
  //   })
  // }

 

  return (
    <Fragment>
      <StatusBar backgroundColor="#ae7a84" />
      <NavigationContainer>
        {props.loggedIn ? <MainNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps)(Navigator);
