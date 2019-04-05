import React, { Component } from "react";
import { SafeAreaView, FlatList } from "react-native";
import styles from "./styles";
import { Actions } from "react-native-router-flux";
import * as api from "../../webservices";
import { MovieCell } from "../../widgets";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { housesList: [] };
    this._fetchMoviesList();
  }

  _fetchMoviesList() {
    api
      .fetchMovies()
      .then(res => {
        console.log(res.data.results);
        this.setState({ moviesList: res.data.results });
      })
      .catch(err => {
        console.error("fetchMovies err: ", err);
      });
  }

  _onMovieTapped = movie => {
    alert("_onMovieTapped");
  };

  _keyExtractor = (item, index) => `${item.id}`;

  _renderItem = ({ item, index }) => (
    <MovieCell movie={item} onPress={movie => this._onMovieTapped(movie)} />
  );

  render() {
    const { moviesList } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={moviesList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          numColumns={2}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
