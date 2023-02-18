
import { StyleSheet, Text, View } from 'react-native';
import HomePage from "./components/HomePage";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutPage from './components/AboutPage';
import EducationPage from './components/Education';
import ExperiencePage from './components/Experience';
import ContactPage from './components/Contacts';
import ProjectPage from './components/Projects';
import SkillPage from './components/Skills';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer  style={styles.header}>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#1f51ff',
        },
        drawerStyle: {
          backgroundColor: '#1f51ff',
          color:"#000",
          // width: 240,
          // flex: 1
        },
        drawerInactiveTintColor:"#000",
        drawerActiveBackgroundColor:"#000",
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Drawer.Screen name="Home" component={HomePage}  />
        <Drawer.Screen name="About" component={AboutPage} />
        <Drawer.Screen name="Experience" component={ExperiencePage} />
        <Drawer.Screen name="Skill" component={SkillPage} />
        <Drawer.Screen name="Projects" component={ProjectPage} />
        <Drawer.Screen name="Education" component={EducationPage} />
        <Drawer.Screen name="Contact" component={ContactPage} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    color:"#000",
  }
});
