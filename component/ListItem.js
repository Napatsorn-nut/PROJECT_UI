import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

const ListItem = ({ item, deleteItem }) => {

  console.log(item)

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}{item.cost}</Text>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Image
            source={require("../icon/close.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
