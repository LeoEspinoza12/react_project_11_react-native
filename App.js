import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from  './src/components/PlaceDetail/PlaceDetail'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import places from './src/store/reducers/places'
import * as actionTypes from './src/store/actions/index'


class App extends Component {
  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName)
  }
  
  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  }

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key)
  }

  render() {
  
  
  const store = createStore(places)
  


    return (
      <Provider store={store}> 

         <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler } />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
      </Provider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddPlace: (name) => { dispatch(actionTypes.addPlace(name)) },
    onDeletePlace: () => { dispatch(actionTypes.deletePlace())},
    onselectPlace: (key) => { dispatch(actionTypes.selectPlace(key))},
    onDeselectPlace: () => { dispatch(actionTypes.deselectPlace())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#e4e0e0",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
