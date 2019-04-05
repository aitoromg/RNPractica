import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

class Detail extends Component {
  static defaultProps = {
    movie: {}
  };

  render() {
    const { movie } = this.props;
    return (
      <View style={styles.container}>
        <Text>{"Movie:"}</Text>
        <Text>{movie.title}</Text>
      </View>
    );
  }
}

export default Detail;
