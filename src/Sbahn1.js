import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import Navigation from "./components/Navigation";

class Sbahn1 extends Component {
  insideLibTwo(onEnter) {
    return (
      <View>
        <Navigation />
        <View style={styles.inLib2} onEnter={onEnter}>
          <Text style={styles.inLibSign2}>
            Go up
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.location.id === 1
          ? this.insideLibTwo(this.props.onEnter)
          : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inLib2: {
    width: 1,
    height: 0.5,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [2, 2, 3] }, { rotateY: -130 }],
    borderWidth: 0.02,
    backgroundColor: "rgb(200, 54, 54)"
  },
  inLibSign2: {
    textAlign: "center",
    fontSize: 0.2,
    color: "blue"
  }
});

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps)(Sbahn1);
