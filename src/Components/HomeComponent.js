import React, { Component } from "react";
import { SafeAreaView, View, Text, Button, FlatList } from "react-native";
import styles from "../All.styles";

const Item = ({ message }) => (
  <View style={styles.item}>
    <Text style={styles.message}>{message}</Text>
  </View>
);

export default class extends Component {
  render() {
    const { message } = this.props;
    const renderItem = ({ item }) => <Item message={item.message} />;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>留言板</Text>
        <View style={styles.flatListView}>
          <FlatList data={message} renderItem={renderItem}></FlatList>
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
