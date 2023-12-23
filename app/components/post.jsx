import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Post({ post }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post?.item?.title}</Text>
      <Text style={styles.body}>{post?.item?.body}</Text>
      <View style={styles.tagsContainer}>
        {post?.item?.tags?.map((tag, index) => (
          <Text key={index} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
      <View style={styles.reactions}>
        <FontAwesome name="heart" size={24} color={"crimson"} />
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          {post?.item?.reactions}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 8,
  },
  tag: {
    marginRight: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#eee",
    borderRadius: 4,
  },
  reactions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
