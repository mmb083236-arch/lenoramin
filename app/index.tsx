import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor:'#232E53'
      }}
    >
      
      <Text style={styles.title}>اتقي الله</Text>
      <Text style={styles.text}> تحدير:  صلي ان كانت عيلك صلاة </Text>
      
      <View style={styles.buttonView}>    
        <Link style={styles.button} href={'/(game)/mainGame'} >التالي</Link>
      </View>
 
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  title:{
  fontSize:36,
  marginRight:20,
  marginBottom:40,
  color:'#eeee'
  },
  text:{
    marginRight:20,
    fontSize:24,
    color:'#eeee',
  },
  button:{
    color:'#eee',
    fontSize:20,

  },
  buttonView:{
    padding:10,
    paddingLeft:30,
    paddingRight:30,
    top:70,
    backgroundColor:"#20B5FF",
    marginRight:'35%',
    borderRadius:25
  }
});