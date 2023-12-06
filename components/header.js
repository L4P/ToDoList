import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {


  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 700,
    color: "white",
    marginTop:'24px',
    marginBottom:'24px',
  },
});
