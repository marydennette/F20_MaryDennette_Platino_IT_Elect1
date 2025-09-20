import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setCount(count - 1)}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  count: { fontSize: 40, fontWeight: "bold", marginBottom: 20 },
  row: { flexDirection: "row", gap: 10 },
  btn: { padding: 15, backgroundColor: "#0084ff", borderRadius: 10, marginHorizontal: 5 },
  btnText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
});