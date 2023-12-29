import { StyleSheet, View } from "react-native";

export default function Card({card}:{card:any}){
    return(
        <View style={styles.card}>
            <View style={[styles.body, {backgroundColor:card.color}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex:0.75,
        marginTop:100,
        width: "100%",
        backgroundColor:"white",
        borderRadius:20,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        
    },
    body:{
        flex:1,
        // borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
    }
  });