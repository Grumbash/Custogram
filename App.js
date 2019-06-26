import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./src/assets/caspan_seal.jpg";
export default class App extends Component {
    state = {
        places: []
    };

    placeNameChangeHandler = event => {
        this.setState({
            placeName: event
        });
    };

    pressAddedHandler = placeName => {
        if (placeName.trim() === "") {
            return;
        }
        this.setState(prevState => ({
            places: prevState.places.concat({
                key: Math.random() + "",
                name: placeName,
                image: placeImage
            })
        }));
    };

    placeDeletedHandler = key => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== key;
                })
            };
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceInput onPlaceAdded={this.pressAddedHandler} />
                <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    listContainer: {
        width: "100%"
    }
});
