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
  FlatList,
} from "react-native";
import { v4 as uuidV4 } from "uuid";
import { connect } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { uploadBusiness } from "../redux/actions";

class UploadBuisness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidV4(),
      fullName: "",
      name: "",
      image: require("../../assets/casino2.jpg"),
      products: [
        // {name: "", value: 0},
        {}
      ],
      rating: 0,
      location: "",
      phone: "",
      startCapital: "",
      owner: props.user.id,
      businessImages: [

      ]
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

    return !result.cancelled ? result : null
  };

  uploadProfilePhoto = async () => {
    const photo = await this.pickImage();
    if (photo) {
      this.setState({image: { uri: photo.uri }});
    }
  }

  uploadBusinessImage = async () => {
    const image = await this.pickImage();
    if (image) {
      this.setState({businessImages: [...this.state.businessImages, image]})
    }
  }


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

  insertProductRow = () => {
    this.setState({ products: [...this.state.products, {}]})
  }

  updateProduct = (index, key, value) => {
    const {products} = this.state;
    products[index][key] = value;
    this.setState({ products });
  }

  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          {/* <Text style={styles.loginText}>Business Info</Text> */}
        </View>
        <View>
          <Text style={styles.propic}>profile picture</Text>
          <Pressable onPress={this.uploadProfilePhoto}>
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

          <View style={{
            ...styles.row,
            marginTop: 15,
          }}>
            <Text>Products</Text>
            <Pressable onPress={this.insertProductRow}>
              <Feather name="plus" size={24} color="#000"/>
            </Pressable>
          </View>
          <View style={{marginBottom: 15, paddingHorizontal: 15}}>
            {this.state.products.map((prod, i) => (
              <View style={{...styles.row, marginBottom: 10}} key={i}>
                <TextInput
                  style={{...styles.input, flexGrow: 1, marginRight: 15}}
                  placeholderTextColor="#aaaaaa"
                  placeholder="Name"
                  value={this.state.products[i].name}
                  onChangeText={(text) => this.updateProduct(i, "name", text)}
                />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#aaaaaa"
                  placeholder="value"
                  value={this.state.products[i].value}
                  onChangeText={(text) => this.updateProduct(i, "value", +text)}
                />
              </View>
            ))}
          </View>

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
            placeholder="Phone"
            value={this.state.phone}
            onChangeText={(text) => {
              this.handleUpdateState("phone", text);
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
            placeholder="start capital"
            value={this.state.startcapital}
            onChangeText={(text) => {
              this.handleUpdateState("startCapital", text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Amount needed"
            value={this.state.needed}
            onChangeText={(text) => {
              this.handleUpdateState("needed", text);
            }}
          />


          <View style={{
            ...styles.row,
            marginTop: 20,
            marginBottom: 10,
          }}>
            <Text style={{}}>Business images</Text>
            <Pressable onPress={this.uploadBusinessImage}>
              <Feather name="plus" size={24} color="#000"/>
            </Pressable>
          </View>
          {(() => {console.log(this.state.businessImages)})()}
          {this.state.businessImages ? (
            <FlatList
              horizontal={true}
              data={this.state.businessImages}
              renderItem={({item}) => <Image source={{uri: item.uri}} style={styles.bizImg}/>}
              keyExtractor={(item) => item.uri.split('/').pop()}
            />
          ) : null}
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
    // marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
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

  bizImg: {
    width: 65 * 1.33,
    height: 65,
    marginHorizontal: 10,
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

  propic:{
    fontSize:15,
    fontWeight:"bold"
  }
});

export default connect((state) => ({user: state.user}), { uploadBusiness })(UploadBuisness);

// const mapStateToProp = (state) => {
//   return { auth: state };
// };

// export default connect(mapStateToProp, { createEmailAccount, registerError })(
// export default UploadBuisness;
// );
