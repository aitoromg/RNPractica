import React, { Component } from "react";
import { Alert } from "react-native";
import { View, ScrollView, Text, Image, SafeAreaView } from "react-native";
import styles from "./styles";
import { Input, Button, CameraPicker } from "../../widgets";
import { BASE_IMG_URL } from "../../config/api";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: "",
      voteError: "",
      image: null
    };
  }

  static defaultProps = {
    movie: {}
  };

  _onSubmit = () => {
    const { vote } = this.state;
    if (!vote) {
      const voteError = "Mandatory Field";
      this.setState({ voteError });
      return;
    } else if (isNaN(vote)) {
      const voteError = "Number Field";
      this.setState({ voteError });
      return;
    } else if (vote < 0 || vote > 10) {
      const voteError = "Number between 0 and 10";
      this.setState({ voteError });
      return;
    } else {
      this.setState({ voteError: "" });
    }

    const form = {
      vote,
      image: this.state.image ? "data:image/jpeg;base64," + this.state.image.data : null
    };
    
    Alert.alert(
      'Movie App',
      'Form submitted successfully',
      [
        {text: 'Done', onPress: () => {
          console.log("Form data: ", form);
          this.setState({ vote: "", image: null });
        }},
      ],
      {cancelable: false},
    );
  };


  render() {
    const { movie } = this.props;
    const source = movie && movie.poster_path ? { uri: `${BASE_IMG_URL}${movie.poster_path}` } : null;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.view}>
            <View style={styles.image}>
              <Image source={source} style={styles.image} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>{"Title"}</Text>
              <Text style={styles.label}>{movie.title}</Text>
              <Text style={styles.title}>{"Release date"}</Text>
              <Text style={styles.label}>{movie.release_date}</Text>
              <Text style={styles.title}>{"Vote average"}</Text>
              <Text style={styles.label}>{movie.vote_average}</Text>
            </View>
            <Text style={styles.title}>{"Overview"}</Text>
            <Text style={styles.label}>{movie.overview}</Text>
          </View>
          <View style={{ margin: 20, marginTop: 0 }}>
            <Text style={styles.title}>{"Form"}</Text>
            <Input
              label={"Your vote:"}
              value={this.state.vote}
              onChangeText={vote => this.setState({ vote })}
              keyboardType={"number-pad"}
              placeholder={"10"}
              error={this.state.voteError}
            />
            <Text style={styles.label}>{"Your image (optional):"}</Text>
            <CameraPicker
              value={this.state.image}
              onChange={image => this.setState({ image })}
            />
          </View>
          <Button
            label={"Send"}
            onPress={this._onSubmit}
            buttonStyle={{ margin: 20 }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Detail;
