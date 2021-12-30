import React, { Component } from "react";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";
import styles from "../All.styles";

export default class extends Component {
  state = { message: null };
  saveMessage = () => {
    this.props.add(this.state.message, this.props.route.params["number"]);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>請輸入訊息</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(message) => this.setState({ message })}
        ></TextInput>
        <View style={styles.buttonView}>
          <Button title="返回" color="red"></Button>
          <Button title="儲存" onPress={this.saveMessage}></Button>
        </View>
      </SafeAreaView>
    );
  }
}
