import React from 'react'
import { StyleSheet, View, Image,Text, TouchableOpacity, FlatList } from 'react-native'

export default function BuisnessDetails1({navigation, route: {params: props}}) {
    const {contact, moreImages} = props;
    return (
      <View style={styles.container}>
          <View>
          <Image
        style={styles.image}
        source={require("../../assets/logo.png")}
      />
        <Text style={styles.saloonName}>{props.name}</Text>
       </View>
       <View style={styles.photos}>
         {props.photos?.map((photo, key) => (
           <Image source={photo} style={styles.image2} key={key}/>
         ))}
       </View>
       {/* <FlatList
         data={props.photos}
         
         renderItem={({ item }) => {
           return (
             <Image source={item} />
           );
         }}
         keyExtractor={(item, index) => `${props.name}-${index}`}
        /> */}
       {/* <View style={styles.photos}></View> */}
        {/* <View style={styles.text2}>
          <Text>Burger</Text>
          <Text>Pizza</Text>
          <Text>Rice</Text>
          <Text>Vegies</Text>
          <Text>Salad</Text>
          <Text>Cofee</Text>
        </View> */}
         {/* <View style={styles.details}>
         <Image
        style={styles.image1}
        source={require("../../../assets/saloon2.jpg")}
      />
      <Text style={styles.offers}>WE OFFER MANICURES, PENDICURES, MASSAGES AND MOBILE MONEY</Text>
         </View> */}
         <View>
         <Text style={styles.textinfo}>{props.description}</Text>
         {moreImages?.[0] && 
            <Image style={styles.image1} source={moreImages[0]} />
          }
     <Text>Proffessional workers and air conditioned environment</Text>
     {moreImages?.[1] && 
      <Image
          style={styles.image1}
          source={moreImages[1]}
        />
     }
         </View>

         <View style={{flex: 1}}>
            {contact?.location && <Text>Location: {contact?.location}</Text>}
            {contact?.tel && <Text>tel: {contact?.tel}</Text>}
            {contact?.email && <Text>Email: {contact?.email}</Text>}
            {props.capital && <Text>Start capital: {props.capital} ghc</Text>}
         </View>
         <View style={styles.nextbutton}>
         <TouchableOpacity onPress={()=>navigation.navigate ("BuisnessDetails2")}>
            <Text style={styles.nextText}>
              Next
            </Text>
          </TouchableOpacity>
          </View>
      </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
       alignItems:"center",
        marginVertical: 20,
        marginHorizontal:20,
      //  marginVertical:20,
      //  padding:16,
       justifyContent:"space-around"
      

    },
    textinfo:{
// marginVertical:15
    },
    image: {
       
        height: 120,
        width: 90,
        alignSelf: "center",
        // marginHorizontal: 2,
        borderRadius: 100
      },

      details:{
          flexDirection:"row",
          // marginVertical:20,
          // marginHorizontal:7,
          flex: 1
      },
      image1:{
          height:90,
          width:340,
          borderRadius:20,
          // flex: 1,
          // marginHorizontal: 2,
          // marginVertical:15
      },

      saloonName:{
          fontSize:30,
          color:"#3b76ad",
      },

      photos: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
    
      image2: {
        height: 70,
        width: 60,
        borderRadius: 20,
      },
      text2: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      offers:{
      // marginVertical:50,
      flex: 1,
      // marginHorizontal: 1
      },
      nextbutton:{
        height: 50,
        width:150,
        backgroundColor: "#3b76ad",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        // marginVertical: 50,
        // marginHorizontal:50
      },
      nextText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
      },
    
})