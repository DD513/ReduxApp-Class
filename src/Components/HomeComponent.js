import React, { Component } from "react";
import { SafeAreaView, View, Text, Button, FlatList } from "react-native";
import styles from "../All.styles";

export default class extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>留言板</Text>
        <View style={styles.flatListView}>
          <FlatList
            data={this.props.message}
            renderItem={({ item }) => {
              <Text>{item.message}</Text>;
            }}
          ></FlatList>
        </View>
        <View style={styles.buttonView}>
          <Button
            title="新增訊息"
            onPress={() =>
              this.props.navigation.push("Message", {
                number: this.props.message.length,
              })
            }
          ></Button>
        </View>
      </SafeAreaView>
    );
  }
}
