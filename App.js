import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import { addPlace, selectPlace, deletePlace, deselectPlace } from "./src/store/actions/index";
class App extends Component {
    pressAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    };

    placeDeletedHandler = key => {
        this.props.onDeletePlace(key);
    };

    modalClosedHandler = () => {
        this.props.onDeselectPlace();
    };

    placeSelectedHandler = key => {
        this.props.onSelectPlace(key);
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                />
                <PlaceInput onPlaceAdded={this.pressAddedHandler} />
                <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
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

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    };
};

const mpaDispatchToProps = dispatch => {
    return {
        onAddPlace: name => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: key => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    };
};

export default connect(
    mapStateToProps,
    mpaDispatchToProps
)(App);
