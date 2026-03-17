
import { Text, View, StyleSheet } from 'react-native'


interface prop{
    progress: string,
    color: string,
}

export default function Progress({color,progress}:prop) {  
    return(
      <View style={{backgroundColor:color , margin:10, padding:20, width:100, height:100, justifyContent:'center',alignItems:'center',borderRadius:15,marginLeft:20,marginRight:20 }}>
        <Text style={{color:'#eee',fontSize:20}}> {progress} </Text>
      </View>
    )
  
}
