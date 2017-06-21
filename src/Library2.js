import React, { Component } from "react";
import {
  asset,
  MediaPlayerState,
  Text,
  View,
  StyleSheet,
  VrButton,
  Video,
  VideoControl
} from "react-vr";
import { connect } from "react-redux";

class Library2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({ autoPlay: true, muted: true }) // init with muted, autoPlay
    };
  }

  insideLibTwo(onEnter) {
    return (
      <View style={styles.inLib2} onEnter={onEnter}>
        <Text style={styles.inLibSign2}>
          Move
        </Text>
      </View>
    );
  }

  renderVideo() {
    return (
      <View>
        <Video
          style={styles.videoView}
          source={asset("bookreturn.mp4")}
          playerState={this.state.playerState}
        />
        <VideoControl
          style={styles.control}
          playerState={this.state.playerState}
        />
      </View>
    );
  }

  renderText() {
    return (
      <View style={styles.textView}>
        <Text style={styles.text}>
          Here you can return books. Here is how:
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.location.id === 4
          ? this.insideLibTwo(this.props.onEnter)
          : <View />}

        {this.props.location.id === 4 ? this.renderVideo() : <View />}

        {this.props.location.id === 4 ? this.renderText() : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inLib2: {
    width: 3,
    height: 0.5,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [6, 1.5, 3.5] }, { rotateY: -125 }],
    borderWidth: 0.02,
    backgroundColor: "rgba(200, 54, 54, 0.8)"
  },
  inLibSign2: {
    textAlign: "center",
    fontSize: 0.35,
    color: "blue"
  },
  videoView: {
    width: 3.0,
    height: 2.0,
    transform: [{ translate: [-4, 2, 5] }, { rotateY: 140 }],
    borderWidth: 0.02,
    borderColor: "red"
  },
  control: {
    height: 0.2,
    width: 4,
    transform: [{ translate: [-4.7, 1.8, 5] }, { rotateY: 140 }],
    borderWidth: 0.01,
    borderColor: "crimson"
  },
  textView: {
    transform: [{ translate: [-5, 4.5, 4] }, { rotateY: 140 }],
    borderWidth: 0.01,
    backgroundColor: "peru"
  },
  text: {
    textAlign: "center",
    fontSize: 0.3,
    color: "white",
    paddingRight: 0.2
  }
});

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps)(Library2);
