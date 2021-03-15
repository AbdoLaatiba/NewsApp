import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function NewsItemLong({ route }) {
  const {
    urlToImage,
    title,
    description,
    author,
    publishedAt,
    url,
  } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${urlToImage}` }} style={styles.image} />
      <Text style={styles.title}> {route.params.title}</Text>
      <Text style={styles.subTitle}>Author: {route.params.author}</Text>
      <Text style={styles.publishedAt}>
        Published at: {route.params.publishedAt}
      </Text>
      <Text style={styles.des}>{route.params.description}</Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`${url}`);
        }}
      >
        <Text style={styles.url}>Source</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    // borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    margin: 5,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#333",
    margin: 5,
  },
  url: {
    color: "#219EBC",
    margin: 8,
  },
  publishedAt: {
    margin: 5,
  },
});
