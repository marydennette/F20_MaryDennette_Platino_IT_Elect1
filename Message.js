import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (text.trim().length === 0) return;

    const newMessage = { id: Date.now().toString(), text, sender: "me" };
    setMessages((prev) => [...prev, newMessage]);
    setText("");

    // auto reply after 1 second
    setTimeout(() => {
      let botReply = getBotReply(newMessage.text);
      const reply = {
        id: (Date.now() + 1).toString(),
        text: botReply,
        sender: "bot",
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  // Bot reply logic
  const getBotReply = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes("hi") || lower.includes("hello")) {
      return "Hello 👋";
    } else if (lower.includes("how are you")) {
      return "I'm good, thanks for asking! 😊";
    } else if (lower.includes("good")) {
      return "Yeah, it really is! 👍";
    } else if (lower.includes("bye")) {
      return "Goodbye! 👋 Have a nice day!";
    }
    return "I don’t understand yet 🤔";
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === "me" ? styles.myBubble : styles.botBubble,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.sender === "me" ? styles.myText : styles.botText,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageBubble: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    maxWidth: "80%",
  },
  myBubble: { backgroundColor: "#0084ff", alignSelf: "flex-end" },
  botBubble: { backgroundColor: "#e5e5ea", alignSelf: "flex-start" },
  messageText: { fontSize: 16 },
  myText: { color: "#fff" },
  botText: { color: "#000" },
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