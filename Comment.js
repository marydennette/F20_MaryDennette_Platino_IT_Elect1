import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function Comment() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const sendComment = () => {
    if (text.trim().length === 0) return;

    const newComment = { id: Date.now().toString(), text };
    setComments((prev) => [...prev, newComment]);
    setText("");
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentBubble}>
      <Text style={styles.commentText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderComment}
        contentContainerStyle={{ flexGrow: 1, padding: 10 }}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type your comment..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendComment}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentBubble: {
    backgroundColor: "#e5e5ea",
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  commentText: { fontSize: 16, color: "#333" },
  inputRow: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendBtn: {
    marginLeft: 8,
    backgroundColor: "#0084ff",
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  sendText: { color: "#fff", fontWeight: "bold" },
});