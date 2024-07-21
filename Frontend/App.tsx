import  React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
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
            options={{ tabBarLabel: "User", tabBarIcon: "account" }}
            name="Register"
            component={UserScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
