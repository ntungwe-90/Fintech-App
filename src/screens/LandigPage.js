import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

export default function LandingPage({ navigation }) {
  const { width } = useWindowDimensions();
  console.log({ width });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business Point</Text>
      <Text style={styles.subtitle}>
        Discover and Invest in New Micro Businesses
      </Text>
      <View
        style={{
          width,
          height: width,
          borderRadius: width,
          overflow: "hidden",
          ...styles.hero,
        }}
      >
        <Image
          style={styles.heroImage}
          source={require("../../assets/handphone.png")}
        />
      </View>
      <TouchableOpacity
        style={styles.nextbutton}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.nextText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 30,
    marginBottom: 15,
    fontWeight: "bold",
  },

  subtitle: {
    color: "grey",
    fontSize: 17,
  },

  hero: {
    // borderRadius: sWidth,
    // height: sWidth,
    // width: sWidth,
    position: "relative",
    left: -60,
    marginVertical: 30,
  },

  heroImage: {
    height: 450,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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

  text1: {
    fontWeight: "bold",
  },

  nextbutton: {
    // height: 50,
    // width: 150,
    marginTop: 40,
    backgroundColor: "#ae7a84",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    // marginVertical: 50,
    // marginHorizontal:50
  },

  nextText: {
    color: "white",
    fontSize: 15,
    // fontWeight: "bold",
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
