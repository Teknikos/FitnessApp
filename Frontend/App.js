import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = () => {
    setLoading(true);
    setError(null);
    
    fetch('http://localhost:5213/WeatherForecast')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError(error);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Load Weather Data" onPress={fetchWeatherData} />
      
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error fetching data.... {JSON.stringify(error)}</Text>
      }
      {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
