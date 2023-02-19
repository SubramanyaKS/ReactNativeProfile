import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function HomePage() {

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Hi I am </Text>
        <Text style={{fontSize:40,color:"#fff"}}>Subramanya K S</Text>
        <StatusBar style="auto" />
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#000",
      },
      text:{
        // fontFamily:"cursive",
        fontSize:25,
        color:"#1f51ff",
      }
})
