import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import SplashScreen from "../screens/SplashScreen";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

// Pages
import HomePage from "../pages/HomePage";
import SchedulePage from "../pages/SchedulePage";
import TaskPage from "../pages/TaskPage";
import MoneyPage from "../pages/MoneyPage";
import ProfilePage from "../pages/ProfilePage";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Schedule" component={SchedulePage} />
        <Stack.Screen name="Task" component={TaskPage} />
        <Stack.Screen name="Money" component={MoneyPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
