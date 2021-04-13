import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { connect } from "react-redux";
// import { createEmailAccount, registerError } from "../../redux/actions/authActions";
import { createEmailAccount, registerError } from "../redux/actions";

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      LastName: "",
      email: "",
      password: "",
    };
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = () => {
    // if (this.state.password !== this.state.comfirm) {
    //   console.log("aaaaaa");
    //   this.props.registerError("Passwords do not match");
    //   return;
    // }
    console.log("fffffdgrtg");
    this.props.createEmailAccount(this.state.email, this.state.password);
  };

  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={require("../../assets/logo.png")}
        />
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign up</Text>
        </View>
        <View>
          {auth.error.register && (
            <Text style={{ color: "red" }}>{auth.error.register}</Text>
          )}
          {/* <View style={styles.registration}>
           <Text style={styles.label}>First Name</Text> */}
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="FirstName"
            value={this.state.firstName}
            onChangeText={(text) => {
              this.handleUpdateState("firstName", text);
            }}
          />
          {/* </View> */}
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="LastName"
            value={this.state.lastName}
            onChangeText={(text) => {
              this.handleUpdateState("lastName", text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Email"
            value={this.state.email}
            onChangeText={(text) => {
              this.handleUpdateState("email", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(text) => {
              this.handleUpdateState("password", text);
            }}
          />

        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleOnSubmit}
          >
            <Text style={styles.buttonText}>sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Dont have an account?</Text>
          <Text style={styles.signupText}>Sign up</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 25,
    // flex:1,
    // justifyContent:"space-around"
  },
  image: {
    alignSelf: "center",
    width: 100,
    height: 80,
    borderRadius: 80,
  },
  loginText: {
    fontSize: 50,
    color: "#3b76ad",
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20,
  },
  loginTextContainer: {
    marginBottom: 30,
  },

  // registration: {
  //       flexDirection: "row",
  //       justifyContent: "space-between",
  //       // borderBottomWidth: 2,
  //       alignItems: "center",
  //       // borderBottomColor: "lightgrey",
  //       marginHorizontal: 10,
  //       marginVertical: 5,
  //     },

  label: {
    fontSize: 20,
    // color:"grey"
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#3b76ad",
    fontSize: 20,
    height: 50,
    marginTop: 20,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#3b76ad",
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "#3b76ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },
  signupText: {
    fontSize: 16,
    color: "#3b76ad",
  },
});

// export default connect(() => ({}))(RegisterScreen);

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { createEmailAccount, registerError })(
  RegisterScreen
);
