import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import CounterApp from "./CounterApp";
import ColorChangerApp from "./ColorChangerApp";
import Message from "./Message";
import Comment from "./Comment";

export default function App() {
  const [screen, setScreen] = useState(null);
  const [midActScreen, setMidActScreen] = useState("message");

  if (screen === "activity5") {
    return (
      <View style={styles.container}>
        <View style={styles.half}>
          <CounterApp />
        </View>
        <View style={styles.half}>
          <ColorChangerApp />
        </View>
        <View style={styles.backBtn}>
          <Button title="Back" onPress={() => setScreen(null)} />
        </View>
      </View>
    );
  }

  if (screen === "midact1") {
    return (
      <View style={styles.container}>
        <View style={styles.switchRow}>
          <Button title="Message" onPress={() => setMidActScreen("message")} />
          <Button title="Comment" onPress={() => setMidActScreen("comment")} />
        </View>
        <View style={styles.flexContent}>
          {midActScreen === "message" ? <Message /> : <Comment />}
        </View>
        <View style={styles.backBtn}>
          <Button title="Back" onPress={() => setScreen(null)} />
        </View>
      </View>
    );
  }

  // Home screen
  return (
    <View style={styles.container}>
      <Button title="Activity 5" onPress={() => setScreen("activity5")} />
      <View style={{ marginVertical: 10 }} />
      <Button title="MidAct 1" onPress={() => setScreen("midact1")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  half: { flex: 1, borderWidth: 1, borderColor: "#ccc" },
  backBtn: { padding: 10, alignItems: "center" },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  flexContent: { flex: 1 },
});