import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { BASE_IMG_URL } from "../../config/api";

class MovieCell extends Component {
  static defaultProps = {
    movie: {},
    onPress: () => {}
  };

  _onCellTapped = () => {
    const { movie } = this.props;
    this.props.onPress(movie);
  };

  render() {
    const { movie } = this.props;
    const source = movie && movie.poster_path ? { uri: `${BASE_IMG_URL}${movie.poster_path}` } : require('../../resources/placeholder.png');
    return (
      <TouchableOpacity
        onPress={() => this._onCellTapped()}
        style={styles.cell}
      >
        <Image source={source} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

export default MovieCell;
