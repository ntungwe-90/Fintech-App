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
// import * as ImagePicker from 'expo-image-picker'

class UploadBuisness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      // LastName:"",
      // email: "",
      buisnessName: "",
      products: "",
      rate: "",
    };
  }

  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Buisness Info</Text>
        </View>
        <View>
          <Text>profil picture</Text>
          <Image
            style={styles.image}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="FullName"
            value={this.state.fullName}
            onChangeText={(text) => {
              this.handleUpdateState("fullName", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="buisnessName"
            value={this.state.buisnessName}
            onChangeText={(text) => {
              this.handleUpdateState("buisnessName", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="products"
            value={this.state.products}
            onChangeText={(text) => {
              this.handleUpdateState("products", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="ratings"
            value={this.state.ratings}
            onChangeText={(text) => {
              this.handleUpdateState("ratings", text);
            }}
          />
        </View>

        <View style={styles.nextbutton}>
          <TouchableOpacity onPress={() => navigation.navigate("AllBuisness")}>
            <Text style={styles.nextText}>upload</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 25,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 80,
  },
  loginText: {
    fontSize: 30,
    color: "#3b76ad",
    fontWeight: "bold",
    alignSelf: "center",
    // marginVertical: 20,
  },
  loginTextContainer: {
    marginBottom: 30,
  },

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

  nextbutton: {
    height: 50,
    width: 150,
    backgroundColor: "#3b76ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
    marginVertical: 50,
    // marginHorizontal:50
  },
  nextText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});

// const mapStateToProp = (state) => {
//   return { auth: state };
// };

// export default connect(mapStateToProp, { createEmailAccount, registerError })(
export default UploadBuisness;
// );
