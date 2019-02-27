

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
  <TouchableOpacity
    onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image 
        source={props.placeImage}
        style={styles.placeImage}
        resizeMode="cover"/>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  placeImage: {
    marginRight: 8,
    maxHeight: 50,
    width: 70
  }
});

export default listItem;