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
  
  const fetchBusinessesFromDatabase = () => {
    firebase.firestore().collection("business").get()
      .then(query => {
        const buisnessList = [];
        query.forEach(doc => {
          buisnessList.push(doc.data())
        });
        props.dispatch({
          type: "POPULATE_BUISNESS",
          payload: buisnessList,
        })
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchBusinessesFromDatabase()
  }, [])

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
