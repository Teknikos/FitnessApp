import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function HomeScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = () => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:5213/WeatherForecast")
      .then((response) => response.json())
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
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Load Weather Data" onPress={fetchWeatherData} />

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error fetching data.... {JSON.stringify(error)}</Text>}
      {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
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
});
