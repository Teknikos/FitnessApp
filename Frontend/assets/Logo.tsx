import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Svg, Path, Rect, G, Circle } from "react-native-svg";

function Logo() {
  return (
    <View style={styles.container}>
      <Svg width="20" height="20" viewBox="0 0 20 20">
      <Path d="M16.993 6.667H3.227l6.883 6.883 6.883-6.883z" fill="#000" />
      </Svg>
    </View>
  );
}

{
  /* <svg
  width="200"
  height="200"
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="200" height="200" fill="white" />
  <g transform="translate(50, 50)">
    <rect x="10" y="40" width="40" height="20" fill="black" />
    <rect x="80" y="40" width="40" height="20" fill="black" />
    <rect x="50" y="45" width="30" height="10" fill="black" />
    <circle cx="20" cy="50" r="10" fill="black" />
    <circle cx="110" cy="50" r="10" fill="black" />
  </g>
</svg>; */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export { Logo };
