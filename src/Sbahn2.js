import React, { Component } from "react";
import {
  asset,
  Text,
  View,
  StyleSheet,
  VrButton,
  Video,
  VideoControl,
  MediaPlayerState
} from "react-vr";
import { connect } from "react-redux";

class Sbahn2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({ autoPlay: true, muted: true }) // init with muted, autoPlay
    };
  }

  renderVideo() {
    return (
      <View>
        <Video
          style={styles.videoView}
          source={asset("stamp.mp4")}
          playerState={this.state.playerState}
        />
        <VideoControl
          style={styles.control}
          playerState={this.state.playerState}
        />
      </View>
    );
  }

  renderSigns(onEnter) {
    return (
      <View>
        <View style={styles.inLib2} onEnter={onEnter}>
          <Text style={styles.inLibSign2}>
            Go up
          </Text>
        </View>
        <View style={styles.stamp1}>
          <Text style={styles.inLibSign2}>
            Stamp your ticket here
          </Text>
        </View>
        <View style={styles.stamp2}>
          <Text style={styles.inLibSign2}>
            Stamp your ticket here
          </Text>
        </View>
        <View style={styles.buy}>
          <Text style={styles.inLibSign2}>
            Buy S-Bahn tickets here
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.location.id === 20
          ? this.renderSigns(this.props.onEnter)
          : <View />}

        {this.props.location.id === 20 ? this.renderVideo() : <View />}
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
    transform: [{ translate: [-0.5, 1, -4.5] }, { rotateY: 0 }],
    borderWidth: 0.02,
    backgroundColor: "rgb(200, 54, 54)"
  },
  stamp1: {
    width: 1,
    height: 0.5,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [-8.5, 1.5, -2.2] }, { rotateY: 90 }],
    borderWidth: 0.02,
    backgroundColor: "peru"
  },
  stamp2: {
    width: 1,
    height: 0.5,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [8.5, 1.7, -1.4] }, { rotateY: -90 }],
    borderWidth: 0.02,
    backgroundColor: "peru"
  },
  buy: {
    width: 1.2,
    height: 0.5,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [-8, 2.2, 0.4] }, { rotateY: 90 }],
    borderWidth: 0.02,
    backgroundColor: "cornsilk"
  },
  inLibSign2: {
    textAlign: "center",
    fontSize: 0.2,
    color: "blue"
  },
  videoView: {
    width: 6.0,
    height: 4.0,
    transform: [{ translate: [15, 5, 2] }, { rotateY: -100 }],
    borderWidth: 0.02,
    borderColor: "red"
  },
  control: {
    height: 0.5,
    width: 7,
    transform: [{ translate: [12, 4.8, 2] }, { rotateY: -100 }],
    borderWidth: 0.01,
    borderColor: "crimson"
  }
});

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps)(Sbahn2);
