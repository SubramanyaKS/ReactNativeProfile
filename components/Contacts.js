import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Text, StyleSheet, View, Linking } from 'react-native'
import { SocialIcon } from "@rneui/base";

export default function ContactPage() {

    return (
        <View style={styles.container}>
        <Text style={styles.header}>Contact</Text>
        <View>
        <SocialIcon
      fontStyle={{}}
      iconSize={25}
      iconStyle={{}}
      iconType="font-awesome"
      onPress={() => Linking.openURL("https://www.linkedin.com/in/subramanya-k-s-b74a92204/")}
      style={{ paddingHorizontal: 10 }}
      title="Linkedin"
      type="linkedin"
    />
    <SocialIcon
      fontStyle={{}}
      iconSize={25}
      iconStyle={{}}
      iconType="font-awesome"
      onPress={() => Linking.openURL("https://www.youtube.com/@subramanyakshebbar/")}
      style={{ paddingHorizontal: 10 }}
      title="Youtube"
      type="youtube"
    />
    <SocialIcon
      fontStyle={{}}
      iconSize={25}
      iconStyle={{}}
      iconType="font-awesome"
      onPress={() => Linking.openURL("https://github.com/SubramanyaKS")}
      style={{ paddingHorizontal: 10 }}
      title="Github"
      type="github"
    />
    <SocialIcon
      fontStyle={{}}
      iconSize={25}
      iconStyle={{}}
      iconType="font-awesome"
      onPress={() => Linking.openURL("https://twitter.com/subbukshebbar")}
      style={{ paddingHorizontal: 10 }}
      title="Twitter"
      type="twitter"
    />
    <SocialIcon
      fontStyle={{}}
      iconSize={25}
      iconStyle={{}}
      iconType="font-awesome"
      onPress={() => Linking.openURL("mailto:subramanyaks2205@gmail.com")}
      style={{ paddingHorizontal: 10 }}
      title="Gmail"
      type="google"
    />
        </View>
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
      header:{
        fontSize:35, 
        marginBottom:25,
        color:"#b905f5"
      }
})