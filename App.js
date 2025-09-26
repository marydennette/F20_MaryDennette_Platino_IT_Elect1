import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Comment from "./Comment";
import Message from "./Message";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("comment");

  return (
    <SafeAreaView style={styles.container}>
      {/* Switch Buttons */}
      <View style={styles.switchButtons}>
        <Button title="Comment" onPress={() => setActiveScreen("comment")} />
        <Button title="Message" onPress={() => setActiveScreen("message")} />
      </View>

      {/* Active Screen */}
      <View style={styles.screen}>
        {activeScreen === "comment" ? <Comment /> : <Message />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" }, // SafeAreaView applies here
  switchButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    paddingVertical: 10,
  },
  screen: { flex: 1 },
});
