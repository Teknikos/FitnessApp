import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { PaperProvider } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{ tabBarLabel: "Home", tabBarIcon: "home" }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{ tabBarLabel: "Settings", tabBarIcon: "cog" }}
            name="Settings"
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
