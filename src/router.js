import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Containers/HomeContainer";
import Message from "./Containers/MessageContainer";

export default class extends Component {
  render() {
    const Stack = createStackNavigator();
    const StackNavigator = () => (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Message" component={Message}></Stack.Screen>
      </Stack.Navigator>
    );

    return <StackNavigator></StackNavigator>;
  }
}
