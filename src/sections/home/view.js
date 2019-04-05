import React, { Component } from "react";
import { SafeAreaView, FlatList } from "react-native";
import styles from "./styles";
import { Actions } from "react-native-router-flux";
import { MovieCell } from "../../widgets";

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.getMoviesList();
  }

  _onMovieTapped = movie => {
    Actions.Detail({ movie, title: movie.title });
  };

  _keyExtractor = (item, index) => `${item.id}`;

  _renderItem = ({ item, index }) => (
    <MovieCell movie={item} onPress={movie => this._onMovieTapped(movie)} />
  );

  render() {
    const { moviesList } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
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
