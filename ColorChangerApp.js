import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Color Changer</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "white", borderWidth: 1 }]}
          onPress={() => setBgColor("white")}
        >
          <Text style={styles.btnText}>White</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "pink" }]}
          onPress={() => setBgColor("pink")}
        >
          <Text style={styles.btnText}>Pink</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "lavender" }]}
          onPress={() => setBgColor("lavender")}
        >
          <Text style={styles.btnText}>Lavender</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  row: { flexDirection: "row", justifyContent: "center", gap: 10 },
  btn: { padding: 15, borderRadius: 10, margin: 5 },
  btnText: { color: "#000", fontWeight: "bold" },
});