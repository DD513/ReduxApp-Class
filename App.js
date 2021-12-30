import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router";
import reducers from "./src/Reducers";
const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Router></Router>
        </NavigationContainer>
      </Provider>
    );
  }
}
