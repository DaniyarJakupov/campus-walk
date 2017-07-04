import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import Navigation from "./components/Navigation";

class Mensa extends Component {
  renderSigns() {
    return (
      <View>
        <Navigation />

        <View style={styles.Mensa}>
          <Text style={styles.text}>
            Mensa
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>

        {this.props.location.id === 15 ? this.renderSigns() : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Mensa: {
    width: 1,
    height: 0.6,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [0.3, 2, -8] }, { rotateY: -10 }],
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

export default connect(mapStateToProps)(Mensa);
