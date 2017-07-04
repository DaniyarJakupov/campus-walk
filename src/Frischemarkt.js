import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import Navigation from "./components/Navigation";

class Frischemarkt extends Component {
  renderSigns() {
    return (
      <View>
        <Navigation />

        <View style={styles.markt}>
          <Text style={styles.text}>
            Frischemarkt
          </Text>
        </View>

        <View style={styles.atm}>
          <Text style={styles.text}>
            Here is ATM
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>

        {this.props.location.id === 13 ? this.renderSigns() : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  markt: {
    width: 2,
    height: 0.8,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [5, 3, 4] }, { rotateY: -100 }],
    borderWidth: 0.02,
    backgroundColor: "rebeccapurple"
  },
  atm: {
    width: 2,
    height: 0.8,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [5, 4, 10] }, { rotateY: -130 }],
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

export default connect(mapStateToProps)(Frischemarkt);
