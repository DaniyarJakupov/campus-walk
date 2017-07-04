import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import Navigation from "./components/Navigation";

class Cafeteria extends Component {
  renderSigns() {
    return (
      <View>
        <Navigation />

        <View style={styles.Cafeteria}>
          <Text style={styles.text}>
            Cafeteria
          </Text>
        </View>

        <View style={styles.mensa}>
          <Text style={styles.text}>
            Mensa this way
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>

        {this.props.location.id === 14 ? this.renderSigns() : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Cafeteria: {
    width: 2,
    height: 0.8,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [3, 3, -8] }, { rotateY: -35 }],
    borderWidth: 0.02,
    backgroundColor: "rebeccapurple"
  },
  mensa: {
    width: 2,
    height: 0.8,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [-2, 3, -8] }, { rotateY: 30 }],
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

export default connect(mapStateToProps)(Cafeteria);
