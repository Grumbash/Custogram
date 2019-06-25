import React, { Component } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default class PlaceInput extends Component {
    state = {
        placeName: ""
    };

    placeNameChangeHandler = event => {
        this.setState({
            placeName: event
        });
    };

    pressSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.placeInput} value={this.state.placeName} onChangeText={this.placeNameChangeHandler} />
                <Button style={styles.placeButton} onPress={this.pressSubmitHandler} title="Add" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});
