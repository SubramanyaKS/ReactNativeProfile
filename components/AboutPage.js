import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Text, StyleSheet, View  } from 'react-native'

export default function AboutPage() {

    return (
        <View style={styles.container}>
          <Text style={{fontSize:35, marginBottom:25,color:"#1f51ff"}} >About Us</Text>
        <Text style={{margin:10, fontSize:16,color:"#1f51ff", textAlign: "center",}}>I am Subramanya K S. A curious minded individual who is eager to explore and solve different problems, and, doing so I try out new approaches with existing technologies, experiment with emerging tools, constantly updating my knowledge, thereby getting better at it each time. I'm passionate about Web Development, Android App Development. Accordingly, I'm equipped with HTML, CSS, JavaScript, SQL skills and proficient in OOP concepts and languages like Java and C. Utilizing all of these skills, I have completed several projects regarding the same and thus am aware of the real world practical constraints that is usually encountered while solving problems. I also actively interact with the open source community, contributing to it and also trying out new stuff. </Text>
        <StatusBar style="auto" />
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000",
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        margin:5,
        color:"#1f51ff",
        textAlign: "center",
      }
})
