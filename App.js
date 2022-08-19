import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [text, setText] = useState('Press Kanye for a quote');

  function getQuote() {
    return fetch("https://api.kanye.rest")
      .then ((response) => response.json())
      .then ((responseJson) => {
        setText(responseJson.quote);
      })
      .catch ((error) => {
        console.error(error);
      });
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={getQuote}>
        <Image source={require("./assets/kanye.png")}/>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    position: 'relative',
    fontSize: 18,
    lineHeight: 24,
    width: 300,
    padding: 24
  },

  button: {
    backgroundColor: '#fff',
 }
});
