import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Text, StyleSheet, View, ScrollView, Image  } from 'react-native';

export default function AboutPage() {

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading} >About me</Text>
          <View>
          <Image
        style={styles.logo}
        source={require('../assets/subbu.png')}
      />
          </View>
        <Text style={styles.text}>I am Subramanya K S. A curious minded individual who is eager to explore and solve different problems, and, doing so I try out new approaches with existing technologies, experiment with emerging tools, constantly updating my knowledge, thereby getting better at it each time. I'm passionate about Web Development, Android App Development. Accordingly, I'm equipped with HTML, CSS, JavaScript, SQL skills and proficient in OOP concepts and languages like Java and C. Utilizing all of these skills, I have completed several projects regarding the same and thus am aware of the real world practical constraints that is usually encountered while solving problems. I also actively interact with the open source community, contributing to it and also trying out new stuff. </Text>
        <StatusBar style="auto" />
      </View>
      </ScrollView>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000",
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        
      },
      heading:{
        fontSize:35,
         marginBottom:25,
         color:"#1f51ff"
      },
      text:{
        margin:16,
        fontSize:16,
        color:"#fff",
        textAlign: "center",
      },
      logo: {
        width: 100,
        height: 150,
        marginBottom:20,
      },
})
