import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import Navigation from "./components/Navigation";

class Cs extends Component {
  renderSigns() {
    return (
      <View>
        <Navigation />

        <View style={styles.cs}>
          <Text style={styles.text}>
            CS Building
          </Text>
        </View>

        <View style={styles.bus}>
          <Text style={styles.text}>
            Bus Stop is here
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>

        {this.props.location.id === 10 ? this.renderSigns() : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cs: {
    width: 2,
    height: 0.8,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [7, 3, -2] }, { rotateY: -80 }],
    borderWidth: 0.02,
    backgroundColor: "rebeccapurple"
  },
  bus: {
    width: 2,
    height: 0.8,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [3, 3, -8] }, { rotateY: -35 }],
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

export default connect(mapStateToProps)(Cs);
