import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "@rneui/themed";

export default function EducationPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Education
      </Text>

      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>JNN College of Engineering, Shivamogga</Card.Title>
        <Text style={styles.university}>
          Visvesvaraya Technological University
        </Text>
        <Card.Divider />
        <Text style={styles.degree}>Bachelor of Engineering</Text>
        <Text style={styles.degree}>Information Science and Engineering</Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>Vikasa Composite P U College, Shivamogga</Card.Title>
        <Text style={styles.university}>Department of PU Education Board</Text>
        <Card.Divider />
        <Text style={styles.degree}>PUC /12th</Text>
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>Sri Ramakrishna Vidyanikethana, Shivamogga</Card.Title>
        <Text style={styles.university}>Karnataka State Education and Examination board</Text>
        <Card.Divider />
        <Text style={styles.degree}> SSLC/10th</Text>
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width:350,
    height:190,
    backgroundColor: "blue",
  },
  degree: {
    textAlign: "center",
    marginTop: 5,
    color:"#fff",
    fontWeight:"bold"
  },
  header:{
    fontSize: 35,
     marginBottom: 25,
      color: "#b905f5"
  },
  university:{ 
    marginBottom: 10, 
    marginTop: 0, 
    padding: 0 ,
    color:"#2efc1c",
    fontStyle:"bold",
    textAlign: "center",
  },
  title:{
    fontWeight:"bold",
    color:"#05f57d",
    fontSize:18,
    textAlign: "center",
  }
});
