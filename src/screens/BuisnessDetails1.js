import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  useWindowDimensions
} from "react-native";

export default function BuisnessDetails1({
  navigation,
  route: { params: props },
}) {
  const { contact, moreImages } = props;
  const { width: screenWidth } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <View>
          <Image
            style={styles.image}
            source={require("../../assets/logo.png")}
          />
          <Text style={styles.buisnessName}>{props.name}</Text>
        </View> */}
        <Text style={styles.buisnessName}>{props.name}</Text>
        {
          !props.owner ? (
            <>
              <FlatList
                horizontal={true}
                contentContainerStyle={styles.photos}
                data={props.photos}
                renderItem={({ item }) => (
                  <Image source={item} style={styles.image2} />
                )}
                keyExtractor={(_, index) => `${index}`}
              />
              {moreImages?.[0] && (
                <Image style={styles.image1} source={moreImages[0]} />
              )}
              <Text>Proffessional Workers and Air Conditioned Environment</Text>
              {moreImages?.[1] && (
                <Image style={styles.image1} source={moreImages[1]} />
              )}
              <View
                style={{
                  flex: 1,
                  marginVertical: 15,
                }}
              >
                {contact?.location && <Text>Location: {contact?.location}</Text>}
                {contact?.tel && <Text>tel: {contact?.tel}</Text>}
                {contact?.email && <Text>Email: {contact?.email}</Text>}
                {props.capital && <Text>Start Capital: {props.capital} ghc</Text>}
              </View>
            </>
          ) : (
            <>
              {/* <Text style={{
                textAlign: "center",
                fontSize: 18,
              }}>{props.name}</Text> */}
      
              <View style={{
                marginBottom: 15,
              }}>
                <Text style={styles.title}>Business description</Text>
                <Text>{props.description || "No description"}</Text>
              </View>
      
              <Text style={styles.title}>Business images</Text>
              <FlatList
                data={props.businessImages}
                renderItem={({item}) => 
                  <Image 
                    source={{uri: item.uri}} 
                    style={{
                      width: screenWidth * .5 * 1.33,
                      height: screenWidth * .5 ,
                      marginVertical: 5
                    }}
                  />
                }
                keyExtractor={(item) => item.uri.split('/').pop()}
              />
            </>
          )
        }
        <View style={styles.nextbutton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("BuisnessDetails2", {...props, forwarded: !props.dummy})}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // marginVertical: 40,
    marginHorizontal: 20,
    paddingBottom: 50,
    justifyContent: "space-around",
  },
  textinfo: {
    marginVertical: 15,
  },
  image: {
    height: 100,
    width: 90,
    alignSelf: "center",
    marginHorizontal: 2,
    borderRadius: 50,
   
  },

  details: {
    flexDirection: "row",

    flex: 1,
  },
  image1: {
    height: 120,
    width: 340,
    resizeMode: "cover",
    borderRadius: 20,
  },

  buisnessName: {
    fontSize: 30,
    color: "#3b76ad",
    marginVertical: 20,
    alignSelf:"center"
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 7,
   
  }, 

  photos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:15
  },

  image2: {
    height: 80,
    width: 80,
    borderRadius: 20,
    resizeMode: "cover",
    marginHorizontal: 10,
  },
  text2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  offers: {
    // marginVertical:50,
    flex: 1,
    // marginHorizontal: 1
  },
  nextbutton: {
    height: 50,
    width: 150,
    backgroundColor: "#ae7a84",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 30
    // marginVertical: 50,
    // marginHorizontal:50
  },
  nextText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
