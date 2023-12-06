import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");

  const onChange = (inputText) => {
    setText(inputText);
  };

  const handleAdd = () => {
    if (text.trim() !== "") {
      addHandler(text);
      setText("");
    } 
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Впишите задачу..."
        value={text}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAdd}
      >
        <Text style={styles.addButtonText}>Добавить задачу</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80vw',
    marginLeft: 'auto', 
    marginRight: 'auto', 
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 36,
    paddingLeft: 16,
    color: '#fff',
  },
  addButton: {
    width: '80vw',
    marginLeft: 'auto', 
    marginRight: 'auto', 
    height: 40,
    backgroundColor: "#4CAF50",
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 24,
  },
  addButtonText: {
    color: "#fff",
  },
});

