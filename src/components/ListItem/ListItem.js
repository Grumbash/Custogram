import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ placeName, onItemPressed }) => (
    <TouchableOpacity onPress={onItemPressed}>
        <View style={styles.listItem}>
            <Text>{placeName}</Text>
        </View>
    </TouchableOpacity>
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
