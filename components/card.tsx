import { Animated, Image, StyleSheet, Text, View } from "react-native";
import data from "../data";

export default function Card({card}:{card:any}){
    return(
        <Animated.View style={styles.card}>
            <View style={styles.header}>
                <Image style={styles.header_item} source={require('../assets/icons/tick.png')}/>
                <Image style={styles.header_item} source={require('../assets/icons/cross.png')}/>
            </View>
            <View style={[styles.body, {backgroundColor:card.color}]}>
                {/* <Image style={styles.image} source={{uri:card.image}}/> */}
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex:0.75,
        marginTop:100,
        width: "100%",
        height:500,
        backgroundColor:"white",
        borderRadius:20,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        
    },
    header:{
        position:"absolute",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:25,
        zIndex:1,
        width:"100%"
        // borderWidth:1.5,
        
    },
    header_item:{
        // borderWidth:1.5,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        width:30,
        height:30,
        display:"none"
    },
    body:{
        flex:1,
        // borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        
    },
    image:{
    
        width:"100%",
        height:"100%",
        borderRadius:20,
        resizeMode:"contain"
    }
  });