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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { createEmailAccount, registerError } from "../redux/actions";

const PencilIcon = (
  <MaterialCommunityIcons name="pencil-outline" size={24} color="#aaaaaa" />
);

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
    this.setState({ loading: true });
    console.log("fffffdgrtg");
    this.props.createEmailAccount(this.state.email, this.state.password);
  };

  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.signupText}>Sign up</Text>
        <View>
          {auth.error.login && (
            <Text style={{ color: "red" }}>{auth.error.login}</Text>
          )}
          <View style={styles.form}>
            <Text style={styles.label}>First Name</Text>
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                placeholder="First name"
                value={this.state.firstName}
                onChangeText={(text) => {
                  this.handleUpdateState("firstName", text);
                }}
              />
              {PencilIcon}
            </View>
            <Text style={styles.label}>Last Name</Text>
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                placeholder="Last name"
                value={this.state.lastName}
                onChangeText={(text) => {
                  this.handleUpdateState("lastName", text);
                }}
              />
              {PencilIcon}
            </View>
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
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleOnSubmit}
          >
            {this.state.loading ? (
              <ActivityIndicator animating={true} color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Register</Text>
            )}
          </TouchableOpacity>
        </View>
        {/* <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Sign up</Text>
        </View>
        <View>
          {auth.error.register && (
            <Text style={{ color: "red" }}>{auth.error.register}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="FirstName"
            value={this.state.firstName}
            onChangeText={(text) => {
              this.handleUpdateState("firstName", text);
            }}
          />
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
        <View style={styles.haveAccountContainer}>
          <Text style={styles.noAccountText}>Dont have an account?</Text>
          <Text style={styles.signupText}>Sign up</Text>
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    // marginVertical: 50,
  },

  signupText: {
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
    marginBottom: 20,
  },

  input: {
    fontSize: 17,
    flexGrow: 1,
  },

  buttonContainer: {
    height: 50,
    backgroundColor: "#ae7a84",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    // fontWeight: "bold",
  },

  haveAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },
});

// export default connect(() => ({}))(RegisterScreen);

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { createEmailAccount, registerError })(
  RegisterScreen
);
