import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { registerUser } from "../services/user";

export default function UserScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleRegisterUser = async () => {
    setErrorMessage(null);

    try {
      const response = await registerUser(email, password);
      console.log("User registerd", response);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
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
    </View>
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
    color: 'red'
  },
  inputField: {
    width: '75%'
  }
});
