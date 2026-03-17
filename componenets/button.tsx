import { Pressable,StyleSheet,Text } from "react-native";
interface prop{
    name:string
    color:string
    onPress:any
    disabled: boolean
}

export default function Bottons({name,color,onPress,disabled}:prop) {
    return(
        <Pressable style={[styles.buttons_1, {backgroundColor:color}]} onPress={onPress} disabled={disabled}>
           <Text style={{color:'#eee'}}> {name} </Text>
       </Pressable>
    )
}


const styles = StyleSheet.create({
    buttons_1:{
    backgroundColor:'#3EA5F9',
    width:90,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 80,
    marginRight:20,
    marginLeft:30,
    marginTop:50
    }
})