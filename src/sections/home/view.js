import React, { Component } from "react";
import { SafeAreaView, FlatList, RefreshControl, Text} from "react-native";
import styles from "./styles";
import { Actions } from "react-native-router-flux";
import { MovieCell } from "../../widgets";
import * as colors from "../../commons/colors";

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

  _renderNoResults = isFetching => {
    if (isFetching) {
      return null;
    }

    return <Text style={styles.noResults}>{"No movies available"}</Text>;
  };

  render() {
    const { moviesList, isFetching } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={moviesList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          numColumns={2}
          ListEmptyComponent={_ => this._renderNoResults(isFetching)}
          refreshControl={
            <RefreshControl
              onRefresh={this.props.getMoviesList}
              refreshing={isFetching}
              tintColor={colors.white}
              colors={[colors.white]}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

export default Home;
