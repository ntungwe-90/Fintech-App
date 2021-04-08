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
// import { loginEmailAccount, loginError } from "../../redux/actions/authActions";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  //   handleUpdateState = (name, value) => {
  //     this.setState({
  //       [name]: value,
  //     });
  //   };

  //   handleOnSubmit = () => {
  //     this.props.loginEmailAccount(this.state.email, this.state.password);
  //   };
  render() {
    //     const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>LOG IN</Text>
        </View>
        <View>
          {/* { auth.error.login && (
            <Text style={{ color: "red" }}>{auth.error.login}</Text>
          )} */}
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Email"
            value={this.state.Email}
            onChangeText={(text) => {
              this.handleUpdateState("email", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.Password}
            onChangeText={(text) => {
              this.handleUpdateState("Password", text);
            }}
          />
        </View>
        <Text style={styles.password}>forgot password?</Text>

        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            // onPress={() => this.props.navigation.navigate("AllBuisness")}
            onPress={() => this.props.dispatch({type: "LOGIN_USER"})}
          >
            <Text style={styles.buttonText} onPress={this.handleOnSubmit}>
              log in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Dont have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    // marginVertical: 50,
  },

  image: {
    alignSelf: "center",
    width: 100,
    height: 80,
    borderRadius: 80,
  },
  loginText: {
    fontSize: 30,
    color: "#3b76ad",
    fontWeight: "bold",
  },
  loginTextContainer: {
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#3b76ad",
    fontSize: 20,
    height: 50,
    marginTop: 20,
  },

  buttonContainer: {
    height: 50,
    backgroundColor: "#3b76ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50,
  },

  password: {
    alignSelf: "flex-end",
    color: "#3b76ad",
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

export default connect(() => ({}))(LoginScreen);
