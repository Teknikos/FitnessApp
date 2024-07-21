import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

export default function HomeScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 


  const newUrl = "http://192.168.50.12:5213/"
  const oldUrl = "http://192.168.50.210:5213/"
  

  const fetchWeatherData = () => {
    setLoading(true);
    setError(null);

    fetch(newUrl+"WeatherForecast")
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setError(error);
        setLoading(false);
      });
  };
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button onPress={fetchWeatherData} mode="contained">
          Load Weather Data
        </Button>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error fetching data.... {JSON.stringify(error)}</Text>}
        {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
