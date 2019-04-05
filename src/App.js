import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Stack, Router, Scene } from "react-native-router-flux";
import { Home, Detail } from "./sections";
import { configureAxios } from "./webservices";
import * as colors from "./commons/colors";
import { store } from "./config/redux";
import { Provider } from "react-redux";

export default class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle("light-content", true);
    configureAxios();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key={"root"}>
            <Scene
              key={"Home"}
              component={Home}
              hideNavBar
              initial
              {...navBarStyles}
            />
            <Scene
              key={"Detail"}
              component={Detail}
              {...navBarStyles}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

const navBarStyles = {
  navigationBarStyle: { backgroundColor: colors.navBar },
  titleStyle: { color: colors.white },
  backButtonTextStyle: { color: colors.white },
  backButtonTintColor: colors.white
};
