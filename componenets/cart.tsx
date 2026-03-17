import { View,Text } from "react-native";

interface prop{
    job:string
}

export default function Cart({job}:prop) {
    return(
        <View style={{width:'90%', height:300, margin:20, alignItems:"center", justifyContent:'center',backgroundColor:'#3F385D',borderRadius:10}}>
            <Text style={{color:'#eee', fontSize:20}}>{job}</Text>
        </View>
    )
}