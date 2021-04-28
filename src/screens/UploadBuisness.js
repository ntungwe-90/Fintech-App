import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Platform,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { uploadBusiness } from "../redux/actions";

class UploadBuisness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      name: "",
      image: require("../../assets/casino2.jpg"),
      // products: "",
      rating: 0,
      location: "",
      phone: "",
      startCapital: "",
      owner: props.user.id
    };
  }

  handleUpdateState(key, value) {
    this.setState({ [key]: value });
  }

  async componentDidMount() {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      this.handleUpdateState("image", { uri: result.uri });
    }
  };

  handleBusinessUpload = () => {
    this.setState({loading: true})
    this.props.uploadBusiness(this.state, () => {
      this.props.navigation.navigate("BusinessOwner")
    });
  };

  // image: require("../assets/saloon.jpg"),
  //   name: "SALON",
  //   products: "manicure,pendicure massage",
  //   description: "WE OFFER MANICURES, PENDICURES, MASSAGES AND MOBILE MONEY",
  //   Rating: "34",
  //   rate: "rate",
  //   photos

  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          {/* <Text style={styles.loginText}>Business Info</Text> */}
        </View>
        <View>
          <Text>profile picture</Text>
          <Pressable onPress={this.pickImage}>
            <Image style={styles.image} source={this.state.image} />
          </Pressable>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Full name"
            value={this.state.fullName}
            onChangeText={(text) => {
              this.handleUpdateState("fullName", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Business name"
            value={this.state.name}
            onChangeText={(text) => {
              this.handleUpdateState("name", text);
            }}
          />

          {/* <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="products"
            value={this.state.products}
            onChangeText={(text) => {
              this.handleUpdateState("products", text);
            }}
          /> */}

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="ratings"
            value={this.state.rating}
            onChangeText={(text) => {
              this.handleUpdateState("rating", +text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="location"
            value={this.state.location}
            onChangeText={(text) => {
              this.handleUpdateState("location", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="tell"
            value={this.state.tell}
            onChangeText={(text) => {
              this.handleUpdateState("phone", text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="start capital"
            value={this.state.startcapital}
            onChangeText={(text) => {
              this.handleUpdateState("startCapital", text);
            }}
          />
        </View>

        <View style={styles.nextbutton}>
          <TouchableOpacity onPress={this.handleBusinessUpload}>
            {this.state.loading ? (
              <ActivityIndicator animating={true} color="#fff"/>
            ) : (
              <Text style={styles.nextText}>upload</Text>
            )}
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
  },
  loginTextContainer: {
    marginBottom: 30,
  },

  label: {
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#ae7a84",
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
    backgroundColor: "#ae7a84",
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
    backgroundColor: "#ae7a84",
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

export default connect((state) => ({user: state.user}), { uploadBusiness })(UploadBuisness);

// const mapStateToProp = (state) => {
//   return { auth: state };
// };

// export default connect(mapStateToProp, { createEmailAccount, registerError })(
// export default UploadBuisness;
// );
