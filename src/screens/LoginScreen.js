import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { loginEmailAccount, loginError } from "../redux/actions";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({ loading: true });
    console.log(this.state);
    this.props.loginEmailAccount(this.state.email, this.state.password);
    this.setState({ loading: false });
  };

  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.loginText}>LOG IN</Text>
        <View>
          {auth.error.login && (
            <Text style={{ color: "red" }}>{auth.error.login}</Text>
          )}
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                placeholder="Email"
                value={this.state.Email}
                onChangeText={(text) => {
                  this.handleUpdateState("email", text);
                }}
              />
              <Feather name="user" size={24} color="#aaaaaa" />
            </View>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputGroup}>
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
              <Ionicons name="md-key-outline" size={24} color="#aaaaaa" />
            </View>
          </View>
        </View>
        <Text style={styles.password}>Forgot password?</Text>

        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleOnSubmit}
          >
            {this.state.loading ? (
              <ActivityIndicator animating={true} color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Log In</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
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
    padding: 30,
    // marginVertical: 50,
    backgroundColor: "#f4f5f6",
  },

  loginText: {
    fontSize: 30,
    color: "#ae7a84",
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },

  label: {
    marginBottom: 10,
    fontSize: 17,
    color: "#202020",
  },

  inputGroup: {
    borderWidth: 1,
    borderColor: "#d2d2d2",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    marginBottom: 30,
  },

  input: {
    fontSize: 17,
    flexGrow: 1,
  },

  password: {
    alignSelf: "flex-end",
    color: "#ae7a84",
  },

  buttonContainer: {
    height: 50,
    backgroundColor: "#ae7a84",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 70,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    // fontWeight: "bold",
  },

  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },

  signupText: {
    fontSize: 16,
    color: "#ae7a84",
  },
});

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { loginEmailAccount, loginError })(
  LoginScreen
);
