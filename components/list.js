import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity style={styles.task} onPress={() => deleteHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  task: {
    width: '80vw',
    marginLeft: 'auto', 
    marginRight: 'auto', 
    minHeight: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#4d4d4d",
    marginBottom: 16,
  },
  text: {
    color: '#fff',
  }
});
