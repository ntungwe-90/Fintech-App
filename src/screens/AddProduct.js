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
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";

// import {AddProduct} from "../redux/actions"

const PencilIcon = (
  <MaterialCommunityIcons name="pencil-outline" size={24} color="#aaaaaa" />
);

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      price: "",
      description: "",
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
    this.props.AddProduct(
      this.state.productname,
      this.state.price,
      this.state.description
    );
  };

  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Add New Products</Text>
        </View>

        {/* <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="productname"
            value={this.state.productname}
            onChangeText={(text) => {
              this.handleUpdateState("productname", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="price"
            value={this.state.price}
            onChangeText={(text) => {
              this.handleUpdateState("pricee", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="description"
            value={this.state.description}
            onChangeText={(text) => {
              this.handleUpdateState("description", text);
            }}
          />
        </View> */}
        <View style={styles.form}>
          <Text style={styles.label}>Product Name</Text>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#aaaaaa"
              placeholder="Product Name"
              value={this.state.ProductName}
              onChangeText={(text) => {
                this.handleUpdateState("Product Name", text);
              }}
            />
            <Feather name="user" size={24} color="#aaaaaa" />
          </View>
          <Text style={styles.label}>Price</Text>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#aaaaaa"
              secureTextEntry={true}
              placeholder="Price"
              value={this.state.price}
              onChangeText={(text) => {
                this.handleUpdateState("price", text);
              }}
            />
            {/* <Ionicons name="md-key-outline" size={24} color="#aaaaaa" /> */}
            <Entypo name="price-tag" size={24} color="#aaaaaa" />
          </View>
          <Text style={styles.label}>Description</Text>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#aaaaaa"
              secureTextEntry={true}
              placeholder="Description"
              value={this.state.Description}
              onChangeText={(text) => {
                this.handleUpdateState("Description", text);
              }}
            />
            {/* <Ionicons name="md-key-outline" size={24} color="#aaaaaa" /> */}
            {PencilIcon}
          </View>
        </View>

        <View style={styles.nextbutton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("OwnersProduct")}
          >
            <Text style={styles.nextText}>ADD</Text>
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
  loginTextContainer: {
    marginBottom: 30,
  },

  label: {
    fontSize: 20,
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

export default connect(() => ({}), { AddProduct })(AddProduct);

// const mapStateToProp = (state) => {
//   return { auth: state };
// };

// export default connect(mapStateToProp, { createEmailAccount, registerError })(
// export default AddProduct;
// );
