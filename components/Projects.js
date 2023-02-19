import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Text, StyleSheet, View, ScrollView , Image} from 'react-native'
import { Card } from "@rneui/themed";
import { SocialIcon } from "@rneui/base";

export default function ProjectPage() {

    return (
        <ScrollView>
          <View style={styles.container}>
        <Text style={styles.header}>Project</Text>
        <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>
              Weather Application.
        </Card.Title>
        <Text style={styles.subtitle}>API Based Web Application.</Text>
        <Card.Divider />
        <Text style={styles.text}>
        React based web application which fetch the weather details of various city across the globe using openweathermap API
        </Text>
        <View style={styles.views}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/ultraviolet/48/000000/react--v1.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/css3.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
        }}/>
        </View>
        <View style={{ alignItems:"center", paddingTop:3}}>
        <SocialIcon
          onPress={() => Linking.openURL("https://github.com/SubramanyaKS/Weather-app/")}
          style={{ paddingHorizontal: 0, }}
          title="GitHub"
          iconSize={20}
          iconStyle={{}}
          iconType="font-awesome"
          type="github"
        />
        </View>
      </Card>
      {/* Second Project */}
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>
        Media Player Application
        </Card.Title>
        <Text style={styles.subtitle}>Android application.</Text>
        <Card.Divider />
        <Text style={styles.text}>
        Application which play the audio and video and able to move forward and backword of media using button.
        </Text>
        <View style={styles.views}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/android-os.png',
        }}/>

        </View>
        <View style={{ alignItems:"center", paddingTop:3}}>
        <SocialIcon
          onPress={() => Linking.openURL("https://github.com/SubramanyaKS/MediaPlayer-Android-Application")}
          style={{ paddingHorizontal: 0, }}
          title="GitHub"
          iconSize={20}
          iconStyle={{}}
          iconType="font-awesome"
          type="github"
        />
        </View>
      </Card>
      {/* Third Project */}
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>
            Random Quote Generator
        </Card.Title>
        <Text style={styles.subtitle}>Html javascript based web app</Text>
        <Card.Divider />
        <Text style={styles.text}>
        A simple web application which display the quote with both text and speech using random quote api.
        </Text>
        <View style={styles.views}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/css3.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
        }}/>
        </View>
        <View style={{ alignItems:"center", paddingTop:3}}>
        <SocialIcon
          onPress={() => Linking.openURL("https://github.com/SubramanyaKS/RandomQuoteGenerator")}
          style={{ paddingHorizontal: 0, }}
          title="GitHub"
          iconSize={20}
          iconStyle={{}}
          iconType="font-awesome"
          type="github"
        />
        </View>
      </Card>
      {/* Forth Project */}
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>
          Bus Reservation System
        </Card.Title>
        <Text style={styles.subtitle}>A Dbms mini-project</Text>
        <Card.Divider />
        <Text style={styles.text}>
        This Project passenger can reserve the bus seat,check the seat availability,view the seat and do the payment after reservation
        </Text>
        <View style={styles.views}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png',
        }}/>
        </View>
        <View style={{ alignItems:"center", paddingTop:3}}>
        <SocialIcon
          onPress={() => Linking.openURL("https://github.com/SubramanyaKS/busreservation/")}
          style={{ paddingHorizontal: 0, }}
          title="GitHub"
          iconSize={20}
          iconStyle={{}}
          iconType="font-awesome"
          type="github"
        />
        </View>
      </Card>
      {/* Fifth Project */}
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>
          My React Portfolio.
        </Card.Title>
        <Text style={styles.subtitle}>React based portfolio website</Text>
        <Card.Divider />
        <Text style={styles.text}>
        My portfolio website version 2 using react js with beautiful ui with support of particle.js. Deployed in netlify app.
        </Text>
        <View style={styles.views}>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/ultraviolet/48/000000/react--v1.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/css3.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
        }}/>
        </View>
        <View style={{ alignItems:"center", paddingTop:3}}>
        <SocialIcon
          onPress={() => Linking.openURL("https://github.com/SubramanyaKS/MyReactApp")}
          style={{ paddingHorizontal: 0, }}
          title="GitHub"
          iconSize={20}
          iconStyle={{}}
          iconType="font-awesome"
          type="github"
        />
        </View>
      </Card>
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
      },
      card: {
        width: 350,
        height: 290,
        backgroundColor: "blue",
      },
      title: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
      },
      subtitle:{
        marginBottom: 10,
        marginTop: 0,
        padding: 0,
        color:"#2efc1c",
        fontWeight: "bold",
        textAlign: "center",
      },
      text:{
        color:"#55fafa",
      },
      views:{
        flexDirection:"row",
         justifyContent:"center",
         padding:5,
      },
      tinyLogo: {
        width:50,
        height:50,
      },
      header:{
        fontSize:35,
        marginBottom:25,
        color:"#b905f5",
      },
      

})