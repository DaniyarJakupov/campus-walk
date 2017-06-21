import React, { Component } from "react";
import { asset, Pano, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import { changeLocation } from "./redux/actions";

class Library extends Component {
  constructor(props) {
    super(props);
  }

  enterLib(onEnter) {
    return (
      <View style={styles.library} onEnter={onEnter}>
        <Text style={styles.librarySign}>
          Enter the Library
        </Text>
      </View>
    );
  }

  insideLibOne() {
    return (
      <View style={styles.inLib1} onEnter={onEnter}>
        <Text style={styles.inLibSign1}>
          Move
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.location.id === 2
          ? this.enterLib(this.props.onEnter)
          : <View />}
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
  },
  inLib1: {
    width: 3,
    height: 0.5,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [6, 4.55, 5.5] }, { rotateY: 140 }],
    borderWidth: 0.02,
    backgroundColor: "rgba(200, 54, 54, 0.8)"
  },
  inLibSign1: {
    textAlign: "center",
    fontSize: 0.35,
    color: "blue"
  }
});

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps, { changeLocation })(Library);
