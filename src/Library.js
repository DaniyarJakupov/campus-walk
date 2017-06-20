import React, { Component } from "react";
import { asset, Pano, Text, View, StyleSheet, VrButton } from "react-vr";

import { mainPlaces, lib } from "./data";

export default class Library extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.library} onEnter={this.props.onEnter}>
        <Text style={styles.librarySign}>
          Enter the Library
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  library: {
    width: 3,
    height: 0.5,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [-6.5, 4.55, 5.5] }, { rotateY: 140 }],
    borderWidth: 0.02,
    backgroundColor: "rgba(200, 54, 54, 0.8)"
  },
  librarySign: {
    textAlign: "center",
    fontSize: 0.35,
    color: "white"
  }
});
