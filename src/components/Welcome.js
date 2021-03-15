import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/image.jpg")}
        style={styles.image}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("home")}
        >
          <Text>Welcome</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#219EBC",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
