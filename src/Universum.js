import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import Navigation from "./components/Navigation";

class Universum extends Component {
  renderSigns() {
    return (
      <View>
        <Navigation />

        <View style={styles.cs}>
          <Text style={styles.text}>
            Universum
          </Text>
        </View>

      </View>
    );
  }

  render() {
    return (
      <View>

        {this.props.location.id === 12 ? this.renderSigns() : <View />}
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
    transform: [{ translate: [-3.5, 2.7, -6] }, { rotateY: 10 }],
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

export default connect(mapStateToProps)(Universum);
