import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from "react-native";

export default function NewsItem({
  urlToImage,
  title,
  navigation,
  description,
  author,
  publishedAt,
  url,
}) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${urlToImage}` }} style={styles.image} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("newsItemLong", {
            urlToImage: urlToImage,
            title: title,
            description: description,
            author: author,
            publishedAt: publishedAt,
            url: url,
          })
        }
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    margin: 5,
    color: "#219EBC",
  },
});
