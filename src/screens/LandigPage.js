import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/welcome.png")}
      />
      <View style={styles.slidebutton}>
        <Text style={styles.slides}></Text>
        <Text style={styles.slides2}></Text>
        <Text style={styles.slides}></Text>
      </View>
      <View style={styles.appinfo}>
        <Text style={styles.text1}>PROTOTYPING</Text>
      <Text>  DISCOVER AND INVEST IN NEW MICRO BUSINESSES
        </Text>
       
      </View>

      <View style={styles.nextbutton}>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Text style={styles.nextText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },
  image: {
    height: 450,
    width: "100%",
  },

  slidebutton: {
    flexDirection: "row",
    marginTop: 50,
    alignSelf: "center",
  },

  slides: {
    backgroundColor: "white",
    height: 8,
    width: 25,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  slides2: {
    backgroundColor: "pink",
    height: 8,
    width: 25,
    borderRadius: 5,
    marginHorizontal: 2,
  },

  appinfo: {
    alignItems: "center",
    marginTop: 50,
  },

  text1:{
    fontWeight:"bold"
  },

  nextbutton: {
    height: 50,
    width: 150,
    marginTop:40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf:"center"
    // marginVertical: 50,
    // marginHorizontal:50
  },
  nextText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
// export default function DecisionPage({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={require("../../assets/logo.png")} />
//       <View style={styles.info}>
//         <Text style={styles.contactInfo}>
//           {" "}
//           DISCOVER AND INVEST IN NEW MICRO BUSINESSES
//         </Text>
//       </View>
//       <View>
//         <Image
//           style={styles.image1}
//           source={require("../../assets/newprofile.jpg")}
//         />
//       </View>

//       <TouchableOpacity onPress={() => navigation.navigate("About")}>
//         <View style={styles.start}>
//           <Text style={styles.text}>GET STARTED</Text>
//           <Text style={styles.started}></Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-around",
//   },
//   message: {
//     alignSelf: "center",
//     fontSize: 15,
//   },
//   image: {
//     // marginHorizontal: 30,
//     alignSelf: "center",
//     width: 100,
//     height: 80,
//     borderRadius: 80,
//   },
//   info: {
//     flexDirection: "column",
//     alignSelf: "center",
//   },
//   image1: {
//     height: 400,
//     width: "100%",
//   },
//   contactInfo: {
//     fontSize: 13,
//     color: "#3b76ad",
//     fontWeight: "bold",
//   },
//   start: {
//     flexDirection: "column",
//     alignSelf: "center",
//   },
//   text: {
//     color: "#3b76ad",
//   },
//   started: {
//     height: 2,
//     width: 90,

//     backgroundColor: "#3b76ad",
//     fontWeight: "bold",
//   },
// });
