// App.js (Activity5 branch)
import React from "react";
import { View, StyleSheet } from "react-native";
import CounterApp from "./CounterApp";
import ColorChangerApp from "./ColorChangerApp";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Half - Counter */}
      <View style={styles.half}>
        <CounterApp />
      </View>

      {/* Bottom Half - Color Changer */}
      <View style={styles.half}>
        <ColorChangerApp />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  half: { flex: 1 },
});