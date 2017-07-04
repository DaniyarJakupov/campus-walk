import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import Navigation from "./components/Navigation";

import { mainPlaces } from "./data";

class Uni1 extends Component {
  renderSigns() {
    return (
      <View>
        <Navigation />

        <View style={styles.ticket1}>
          <Text style={styles.text}>
            You can buy S-Bahn tickets here
          </Text>
        </View>

      </View>
    );
  }

  render() {
    return (
      <View>

        {this.props.location.id === 22 ? this.renderSigns() : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ticket1: {
    width: 3,
    height: 0.8,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [4, 1.5, 0.2] }, { rotateY: -100 }],
    borderWidth: 0.02,
    backgroundColor: "rebeccapurple"
  },
  text: {
    textAlign: "center",
    fontSize: 0.2,
    color: "white"
  }
});

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps)(Uni1);
