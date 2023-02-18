import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Text,Image, StyleSheet,ScrollView, View } from 'react-native';
import { Card } from "@rneui/themed";

export default function SkillPage() {

    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.header}>Skill</Text>
        <Card containerStyle={styles.card}>
            <Text style={styles.title}>Programming Language</Text>
            <View style={styles.views}>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/c-programming.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/python--v1.png',
        }}/>
        </View>
        </Card>
        <Card containerStyle={styles.card}>
            <Text style={styles.title}>Database</Text>
            <View style={styles.views}>
            
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/60/000000/mysql-logo.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/mongodb.png',
        }}/>
        </View>
        </Card>

        <Card containerStyle={styles.card}>
            <Text style={styles.title}>Web Tech</Text>
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
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/ultraviolet/48/000000/react--v1.png',
        }}/>
        </View>
        </Card>
        <Card containerStyle={styles.card}>
            <Text style={styles.title}>Framework</Text>
            <View style={styles.views}>
            
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/nodejs.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/bootstrap.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/windows/64/null/react-native.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/django.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/flask.png',
        }}/>
        </View>
        </Card>
        <Card containerStyle={styles.card}>
            <Text style={styles.title}>IDE</Text>
            <View style={styles.views}>
            
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/ios-filled/50/null/java-eclipse.png',
        }}/>
        
        </View>
        </Card>
        <Card containerStyle={styles.card}>
            <Text style={styles.title}>Others</Text>
            <View style={styles.views}>
            
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/css3.png',
        }}/>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/git.png',
        }}/>
        
        <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.icons8.com/color/48/000000/android-os.png',
        }}/>
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
      header:{
        fontSize:35,
        marginBottom:25,
        color:"#1f51ff",
      },
      card: {
        width:350,
        height:100,
        backgroundColor: "blue",
      },
      tinyLogo: {
        width: 50,
        height: 50,
      },
      title:{
          textAlign:"center"
      },
      views:{
          flexDirection:"row",
           justifyContent:"center"
        }
})