import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      console.log("Login Status:", isLoggedIn);
      if (isLoggedIn === "true") {
        navigation.replace("Main");
      } else {
        navigation.replace("Login");
      }
    };

    setTimeout(() => {
      checkLoginStatus();
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.tagline}>DODO: Smart Daily life tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
  },
  tagline: { fontSize: 18, color: "#fff", marginTop: 10 },
});

export default SplashScreen;