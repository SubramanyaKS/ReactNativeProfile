import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "@rneui/themed";

export default function EducationPage() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, marginBottom: 25, color: "#1f51ff" }}>
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
  },
  university:{ 
    marginBottom: 10, 
    marginTop: 0, 
    padding: 0 ,
    fontStyle:"italic",
    textAlign: "center",
  },
  title:{
    fontWeight:"bold",
    color:"#000",
    fontSize:18,
    textAlign: "center",
  }
});