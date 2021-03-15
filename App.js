import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/components/HomePage";
import NewsList from "./src/components/NewsList";
import NewsItem from "./src/components/NewsItem";
import Search from "./src/components/Search";
import NewsItemLong from "./src/components/NewsItemLong";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackground,
} from "@react-navigation/stack";
import Welcome from "./src/components/Welcome";

const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome">
          <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={HomePage}
            options={{
              title: "The latest news",
              headerStyle: {
                backgroundColor: "#023047",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                alignSelf: "center",
                fontSize: 20,
              },
              headerLeft: null,
            }}
          />
          <Stack.Screen name="newsItem" component={NewsItem} />
          <Stack.Screen
            name="newsItemLong"
            component={NewsItemLong}
            options={{
              title: "The latest news",
              headerStyle: {
                backgroundColor: "#023047",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FB8500",
    alignItems: "center",
    justifyContent: "center",
  },
});
