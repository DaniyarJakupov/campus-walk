import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

class Library7 extends Component {
  constructor(props) {
    super(props);
  }

  insideLibTwo(onEnter) {
    return (
      <View style={styles.inLib2} onEnter={onEnter}>
        <Text style={styles.inLibSign2}>
          Go back to Uni
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.location.id === 9
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
    transform: [{ translate: [2, 2, 6] }, { rotateY: 190 }],
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

export default connect(mapStateToProps)(Library7);
