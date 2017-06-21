import React from "react";
import { asset, Pano, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import { lib, sbahn } from "./data";

import Library from "./Library";
import Library1 from "./Library1";
import Library2 from "./Library2";
import Library3 from "./Library3";
import Library4 from "./Library4";
import Library5 from "./Library5";
import Library6 from "./Library6";
import Library7 from "./Library7";

import Sbahn1 from "./Sbahn1";
import Sbahn2 from "./Sbahn2";
import Sbahn3 from "./Sbahn3";

import Uni1 from "./Uni1";

import { changeLocation } from "./redux/actions";

class App extends React.Component {
  changeState1() {
    this.props.changeLocation(lib[0]);
  }

  changeState2() {
    this.props.changeLocation(lib[1]);
  }

  changeState3() {
    this.props.changeLocation(lib[2]);
  }
  changeState4() {
    this.props.changeLocation(lib[3]);
  }
  changeState5() {
    this.props.changeLocation(lib[4]);
  }
  changeState6() {
    this.props.changeLocation(lib[5]);
  }
  changeState7() {
    this.props.changeLocation(lib[6]);
  }
  changeState8() {
    this.props.changeLocation(sbahn[2]);
  }

  changeStateS1() {
    this.props.changeLocation(sbahn[0]);
  }
  changeStateS2() {
    this.props.changeLocation(sbahn[1]);
  }
  changeStateS3() {
    this.props.changeLocation(sbahn[2]);
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.props.location.image)} />

        <Uni1 />

        <Sbahn1 onEnter={this.changeStateS1.bind(this)} />
        <Sbahn2 onEnter={this.changeStateS2.bind(this)} />
        <Sbahn3 onEnter={this.changeStateS3.bind(this)} />

        <Library onEnter={this.changeState1.bind(this)} />
        <Library1 onEnter={this.changeState2.bind(this)} />
        <Library2 onEnter={this.changeState3.bind(this)} />
        <Library3 onEnter={this.changeState4.bind(this)} />
        <Library4 onEnter={this.changeState5.bind(this)} />
        <Library5 onEnter={this.changeState6.bind(this)} />
        <Library6 onEnter={this.changeState7.bind(this)} />
        <Library7 onEnter={this.changeState8.bind(this)} />

      </View>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps, { changeLocation })(App);
