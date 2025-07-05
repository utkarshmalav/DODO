import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>DODO</Text>
      </View>

      <View style={styles.navRow}>
        <NavItem icon="home" label="Home" />
        <NavItem icon="calendar-alt" label="Schedule" />
        <NavItem icon="tasks" label="Task" />
        <NavItem icon="wallet" label="Money" />
        <NavItem icon="user" label="Profile" />
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <TouchableOpacity style={styles.navItem}>
      <FontAwesome5 name={icon} size={16} color="#d35400" />
      <Text style={styles.navText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 35,
    paddingBottom: 5,
    backgroundColor: "orange",
    borderBottomWidth: 1,
    borderBottomColor: "#d35400",
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: "#d35400",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#d35400",
  },
});
