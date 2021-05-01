import React, { useState } from "react";
import {
  FlatList,
  ScrowView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { updateBusiness } from "../redux/actions"
// import { Rating } from "react-native-ratings";
import Rating from "../components/Rating";

function BuisnessDetails2({ navigation, route: { params: props }, updateBusiness: postFunc }) {
  const [rating, setRating] = useState(props.rating || 0);
  // const [loading, setLoading] = useState(false)
  return (
    <View style={styles.container}>
      <View>
        {/* <Image style={styles.image} source={require("../../assets/logo.png")} /> */}
        <Text style={styles.saloonName}>{props.name}</Text>
      </View>

      <View>
        <Text>
          Account Details on Goods Sold and Profit Made in the Past Six Months{" "}
        </Text>
      </View>

      <View style={styles.profit}>
        <Text>Product</Text>
        <Text>Amount</Text>
        { props.forwarded ? null : <Text>Profits</Text>}
      </View>
      {
        props.forwarded ? (
          props?.products?.map(({name, value}) => (
            <View style={styles.profit}>
              <Text style={{textTransform: "capitalize"}}>{name}</Text>
              <Text>{value}</Text>
            </View>    
          ))
        ) : (
          <>
            <View style={styles.profit}>
              <Text>Wigs</Text>
              <Text>5000</Text>
              <Text>10000</Text>
            </View>
            <View style={styles.profit}>
              <Text>Massage</Text>
              <Text>6000</Text>
              <Text>120000</Text>
            </View>
            <View style={styles.profit}>
              <Text>Polish</Text>
              <Text>1000</Text>
              <Text>3000</Text>
            </View>
            <View style={styles.profit}>
              <Text>Kits</Text>
              <Text>1000</Text>
              <Text>1500</Text>
            </View>
            <View style={styles.profit}>
              <Text>Hair</Text>
              <Text>5000</Text>
              <Text>10000</Text>
            </View>
          </>
        )
      }

      {
        props.forwarded ? (
          <View style={styles.total}>
            <Text style={styles.Text}>
              TOTAL PROFIT = 
              {props.products.reduce((total, {value}) => total + value, 0)}
              GHC
            </Text>
          </View>
        ) : (
          <View style={styles.total}>
            <Text style={styles.Text}>TOTAL PROFIT = 100000GHC</Text>
          </View>
        )
      }

      <View style={styles.donation}>
        <Text style={styles.donationText}>
          Amount needed to expand = {
            props.forwarded 
              ? props.needed || "Not specified" 
              : 3000000
            }
        </Text>
        <Text style={styles.donationText}>
          Contact: {props.forwarded 
            ? props.phone || "Unknown"
            : "0592286843 or violadavis@email.com"
          }
        </Text>
      </View>

      <View>
        <Rating
          // readonly={true}
          total={5}
          rating={rating}
          onRatingChange={setRating}
        />
      </View>
      {/* <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate ("LandingPage")} >
          <Text style={styles.buttonText}> Post a Review</Text>
        </TouchableOpacity>
      </View> */}
      {/* <View style={styles.bottons}> */}
      <View style={styles.nextbutton}>
        <TouchableOpacity onPress={() => {
          const {forwarded, ...details} = props
          // setLoading(true);
          // console.log({...props, rating})
          postFunc({...details, rating}, () => {
            // setLoading(false)
            navigation.navigate("AllBuisness")
          })
        }}>
          {/* {loading 
            ? <Text style={styles.nextText}>Post a review</Text>
            : <ActivityIndicator animating={true} color="white"/>
          } */}
          <Text style={styles.nextText}>Post a review</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.nextbutton}>
        <TouchableOpacity onPress={() => navigation.navigate("AllBuisness")}>
          <Text style={styles.nextText}>Invest</Text>
        </TouchableOpacity>
      </View> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginVertical: 5,
    marginHorizontal: 10,
    //  padding:16
    justifyContent: "space-around",
    // alignItems:"center"
  },
  image: {
    height: 90,
    width: 90,
    alignSelf: "center",
    marginHorizontal: 2,
    borderRadius: 50,
  },

  saloonName: {
    fontSize: 30,
    color: "#3b76ad",
    alignSelf: "center",
  },

  profit: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 30,
    height: 25,
    backgroundColor: "grey",
    fontWeight: "bold",
  },
  total: {
    alignItems: "flex-end",
  },

  Text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  donation: {
    alignSelf: "center",
    // marginTop: 10,
  },

  donationText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  buttonContainer: {
    height: 50,
    backgroundColor: "#3b76ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    // width:90
    // marginVertical: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  nextbutton: {
    height: 50,
    width: 150,
    backgroundColor: "#ae7a84",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
    // marginVertical: 50,
    // marginHorizontal:50
  },
  nextText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  bottons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default connect(() => ({}), {updateBusiness})(BuisnessDetails2);
