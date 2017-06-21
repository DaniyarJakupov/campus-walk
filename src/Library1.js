import React, { Component } from "react";
import { asset, Pano, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

class Library1 extends Component {
  constructor(props) {
    super(props);
  }

  insideLibOne(onEnter) {
    return (
      <View style={styles.inLib1} onEnter={onEnter}>
        <Text style={styles.inLibSign1}>
          Reception
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.location.id === 3
          ? this.insideLibOne(this.props.onEnter)
          : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inLib1: {
    width: 3,
    height: 0.5,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [3, 1, -3] }],
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

export default connect(mapStateToProps)(Library1);
