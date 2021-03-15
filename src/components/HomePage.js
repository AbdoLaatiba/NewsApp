import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import NewsItem from "./NewsItem";

import * as GoIcon from "react-icons/go";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      search: "",
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=9f1b2ca6256e4df3b491597a45529cbb"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ news: data.articles }))
      .catch((err) => console.log(err));
  }

  render() {
    const handleSubmit = () => {
      fetch(
        `https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=9f1b2ca6256e4df3b491597a45529cbb`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ news: data.articles }))
        .catch((err) => console.log(err));
    };

    const renderItem = ({ item }) => <Item title={item.title} />;
    return (
      <ScrollView style={{ flex: 1 }}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Search Articles ..."
            onChangeText={(text) =>
              fetch(
                `https://newsapi.org/v2/everything?q=${text}&apiKey=9f1b2ca6256e4df3b491597a45529cbb`
              )
                .then((res) => res.json())
                .then((data) => this.setState({ news: data.articles }))
                .catch((err) => console.log(err))
            }
            // onSubmitEditing={handleSubmit}
            // value={this.state.search}
          />
        </View>
        {this.state.news ? (
          this.state.news.map((item) => (
            <NewsItem
              urlToImage={item.urlToImage}
              title={item.title}
              description={item.description}
              navigation={this.props.navigation}
              key={item.publishedAt}
              author={item.author}
              publishedAt={item.publishedAt}
              url={item.url}
            />
          ))
        ) : (
          <View>
            <Text style={styles.err}>No Items</Text>
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 70,
  },
  err: {
    backgroundColor: "#fff",
    padding: 20,
  },
});
