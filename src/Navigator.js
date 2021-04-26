import React, { Fragment } from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";
import AuthNavigation from "./AuthNavigation";

function Navigator(props) {
  // console.log(props.loggedIn)
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
