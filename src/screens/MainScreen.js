import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const MainScreen = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Text style={styles.pageText}>This is the Home Page</Text>;
      case 'Schedule':
        return <Text style={styles.pageText}>This is the Schedule Page</Text>;
      case 'Task':
        return <Text style={styles.pageText}>This is the Task Page</Text>;
      case 'Money':
        return <Text style={styles.pageText}>This is the Money Page</Text>;
      case 'Profile':
        return <Text style={styles.pageText}>This is the Profile Page</Text>;
      default:
        return <Text style={styles.pageText}>Unknown Page</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>DODO</Text>
      </View>

      {/* Icon Row */}
      <View style={styles.navRow}>
        <NavItem icon="home" label="Home" isActive={activeTab === 'Home'} onPress={() => setActiveTab('Home')} />
        <NavItem icon="calendar-alt" label="Schedule" isActive={activeTab === 'Schedule'} onPress={() => setActiveTab('Schedule')} />
        <NavItem icon="tasks" label="Task" isActive={activeTab === 'Task'} onPress={() => setActiveTab('Task')} />
        <NavItem icon="wallet" label="Money" isActive={activeTab === 'Money'} onPress={() => setActiveTab('Money')} />
        <NavItem icon="user" label="Profile" isActive={activeTab === 'Profile'} onPress={() => setActiveTab('Profile')} />
      </View>

      {/* Content Area */}
      <View style={styles.content}>
        {renderContent()}
      </View>
    </SafeAreaView>
  );
};

const NavItem = ({ icon, label, isActive, onPress }) => {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <FontAwesome5 name={icon} size={18} color={isActive ? "#d35400" : "#aaa"} />
      <Text style={[styles.navText, { color: isActive ? "#d35400" : "#aaa" }]}>{label}</Text>
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
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  pageText: {
    fontSize: 18,
    color: "#d35400",
  },
});
