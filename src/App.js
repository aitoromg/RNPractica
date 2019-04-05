import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Stack, Router, Scene } from "react-native-router-flux";
import { Home } from "./sections";
import { configureAxios } from "./webservices";

export default class App extends Component {
  constructor(props) {
    super(props);
    configureAxios();
  }

  render() {
    return (
      <Router>
        <Stack key={"root"}>
          <Scene key={"Home"} component={Home} hideNavBar initial/>
        </Stack>
      </Router>
    );
  }
}
