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

class Library3 extends Component {
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
          source={asset("booktake.mp4")}
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
          Here you can check out a book. Here is how:
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.props.location.id === 5
          ? this.insideLibTwo(this.props.onEnter)
          : <View />}

        {this.props.location.id === 5 ? this.renderVideo() : <View />}

        {this.props.location.id === 5 ? this.renderText() : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inLib2: {
    width: 1,
    height: 0.3,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translate: [2, 1.3, 4] }, { rotateY: -170 }],
    borderWidth: 0.02,
    backgroundColor: "rgba(200, 54, 54, 0.8)"
  },
  inLibSign2: {
    textAlign: "center",
    fontSize: 0.2,
    color: "blue"
  },
  videoView: {
    width: 6.0,
    height: 4.0,
    transform: [{ translate: [7, 1, 5.7] }, { rotateY: -110 }],
    borderWidth: 0.02,
    borderColor: "red"
  },
  control: {
    height: 0.5,
    width: 7,
    transform: [{ translate: [7, 0.85, 5.7] }, { rotateY: -110 }],
    borderWidth: 0.01,
    borderColor: "crimson"
  },
  textView: {
    transform: [{ translate: [7.5, 7, 5.7] }, { rotateY: -110 }],
    borderWidth: 0.01,
    backgroundColor: "peru"
  },
  text: {
    textAlign: "center",
    fontSize: 0.5,
    color: "white",
    paddingRight: 0.2
  }
});

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps)(Library3);
