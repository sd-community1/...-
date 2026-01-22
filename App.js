import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>تطبيقي بـ React Native</Text>
        <Text style={styles.subtitle}>هذا التطبيق يعمل عبر Expo Go</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => alert('مرحباً بك!')}>
          <Text style={styles.buttonText}>اضغط هنا</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#bbb',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
