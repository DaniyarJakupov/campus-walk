import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import Navigation from "./components/Navigation";

class BusStation extends Component {
  renderSigns() {
    return (
      <View>
        <Navigation />

        <View style={styles.atm}>
          <Text style={styles.text}>
            ATM
          </Text>
        </View>

      </View>
    );
  }

  render() {
    return this.props.location.id === 11 ? this.renderSigns() : <View />;
  }
}

const styles = StyleSheet.create({
  atm: {
    width: 1,
    height: 0.8,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [0, 3, -6] }, { rotateY: 10 }],
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

export default connect(mapStateToProps)(BusStation);
