import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

class Library5 extends Component {
  constructor(props) {
    super(props);
  }

  insideLibTwo(onEnter) {
    return (
      <View style={styles.inLib2} onEnter={onEnter}>
        <Text style={styles.inLibSign2}>
          Floor 3
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.location.id === 7
          ? this.insideLibTwo(this.props.onEnter)
          : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inLib2: {
    width: 1.5,
    height: 0.5,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [5, 1, -1] }, { rotateY: -90 }],
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

export default connect(mapStateToProps)(Library5);
