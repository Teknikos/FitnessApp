import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { loginUser, registerUser } from "../services/user";

export default function UserScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [userRegistered, setUserRegistered] = useState(false);

  const handleRegisterUser = async () => {
    setErrorMessage(null);

    try {
      const response = await registerUser(email, password);
      console.log("User registered", response);
      setUserRegistered(true);
    } catch (error) {
      setErrorMessage(error.message);
      setUserRegistered(false);
    }
  };

  const handleLoginUser = async () => {
    try {
      const response = await loginUser(email, password);
      console.log("Logged in.")
    } catch (error) {
      setErrorMessage(error.message)
      throw error;
    }
  }

  return (
    <>
    {/* Register User */}
      <View style={styles.container}>
        <TextInput
          label={"Email"}
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.inputField}
        />
        <View style={styles.divder}></View>
        <TextInput
          label={"Password"}
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.inputField}
        />
        <View style={styles.divder}></View>
        <Button onPress={handleRegisterUser} mode="contained">
          Register
        </Button>
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        {userRegistered && <Text>User registered successfully.</Text>}
      </View>
      {/* Logon */}
      <View style={styles.container}>
        <Button onPress={handleLoginUser} mode="contained">Logon</Button>
      </View>
      {/* Logoff */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  divder: {
    margin: 4,
  },
  errorText: {
    color: "red",
  },
  inputField: {
    width: "75%",
  },
});
