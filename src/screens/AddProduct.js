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
import { connect } from "react-redux";
// import {AddProduct} from "../redux/actions"

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
    this.props.AddProduct(this.state.productname, this.state.price, this.state.description);
  };


  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Add New Products</Text>
        </View>
       
        <View>
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
        </View>

        <View style={styles.nextbutton}>
          <TouchableOpacity onPress={() => navigation.navigate("OwnersProduct")}>
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

export default connect(() => ({}), { AddProduct })(AddProduct);

// const mapStateToProp = (state) => {
//   return { auth: state };
// };

// export default connect(mapStateToProp, { createEmailAccount, registerError })(
// export default AddProduct;
// );
