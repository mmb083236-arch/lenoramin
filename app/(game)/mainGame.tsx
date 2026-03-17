import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";


export default function mainGame() {
    const [onPress,setOnPress] = useState(false)
    return (
        <SafeAreaView style={{ backgroundColor: '#232E53', flex: 1 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>لنـخمن </Text>
            </View>
            <View style={styles.cart}>
                <Text style={{ color: '#eee', fontSize: 24 }}>معلم</Text>
            </View>
            <View style={[styles.button, {width:onPress ? 200: 120}]}>
                <Link style={{ color: '#eee' }} href={'/(game)/game'} onPress={()=> setOnPress(true)}>العب مع صديق</Link>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 64,
        color: '#eee',
        margin: 30,
        shadowColor: '#eee',
        shadowOffset: { width: 10, height: 10 },
    },
    cart: {
        backgroundColor: '#3F385D',
        margin: 40,
        width: "80%",
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#46BDF8',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 80,

    }
})