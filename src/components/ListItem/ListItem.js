import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ListItem = ({ placeName }) => (
    <View style={styles.listItem}>
        <Text>{placeName}</Text>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        margin: 5,
        backgroundColor: "#eee",
        color: "red"
    }
});

export default ListItem;
