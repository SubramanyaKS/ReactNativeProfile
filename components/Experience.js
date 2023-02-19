import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View, Linking, ScrollView } from "react-native";
import { Card } from "@rneui/themed";
import { SocialIcon } from "@rneui/base";

export default function ExperiencePage() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{ fontSize: 35, marginBottom: 25, color: "#1f51ff" }}>
        Experience
      </Text>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>
          Web Development and Design Intern
        </Card.Title>
        <Text style={styles.company}>Ekathva Innovations Pvt. Ltd</Text>
        <Card.Divider />
        <Text>
          Done a Project titled "Django Based REST API development for Ayucare
          Management".One month online industry level internship helped me to
          gain knowledge about resent technology, ideologies and aesthetics of
          the company.Learnt about Django and REST API
        </Text>
        <View style={{ alignItems:"center", paddingTop:3}}>
        <SocialIcon
          onPress={() => Linking.openURL("https://github.com/SubramanyaKS/AyuCareManagement")}
          style={{ paddingHorizontal: 0, }}
          title="GitHub"
          iconSize={20}
          iconStyle={{}}
          iconType="font-awesome"
          type="github"
        />
        </View>
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>
          Web Development and Design Intern
        </Card.Title>
        <Text style={styles.company}>The Sparks Foundation</Text>
        <Card.Divider />
        <Text>
          My First Internship helped me to gain some knowledge on web
          development. Worked on the project title "Basic Banking System" which
          is demonstrate the basic banking operation
        </Text>
        <View style={{ alignItems:"center", paddingTop:3}}>
        <SocialIcon
          onPress={() => Linking.openURL("https://github.com/SubramanyaKS/Task1-BasicBankingSystem")}
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
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding:25,
  },
  company: {
    marginBottom: 10,
    marginTop: 0,
    padding: 0,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    width: 350,
    height: 300,
    backgroundColor: "blue",
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
