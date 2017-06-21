import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import { mainPlaces } from "./data";

import { changeLocation } from "./redux/actions";

class Uni1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    };
  }

  toggleNav() {
    this.setState({ showNav: !this.state.showNav });
  }

  renderText() {
    return (
      <Text style={styles.navText}>
        {this.state.showNav ? "Close Navigation" : "Open Navigation"}
      </Text>
    );
  }

  renderNavOne() {
    if (this.state.showNav) {
      return (
        <View>
          <View style={styles.navMenu}>
            {mainPlaces.map(place => {
              return (
                <View
                  style={styles.navItem}
                  key={place.id}
                  onEnter={() => this.props.changeLocation(place)}
                >
                  <Text style={styles.navItemText}>
                    {place.name}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        {this.props.location.id === 22
          ? <VrButton style={styles.navButton} onEnter={() => this.toggleNav()}>
              {this.renderText()}
            </VrButton>
          : <View />}

        {this.props.location.id === 22 ? this.renderNavOne() : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navMenu: {
    width: 3,
    height: 1.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    transform: [{ translate: [-2, 3.5, 6] }, { rotateY: 160 }]
  },
  navButton: {
    backgroundColor: "rgba(200, 54, 54, 0.8)",
    width: 1,
    height: 1,
    borderRadius: 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.01,
    transform: [{ translate: [-2, 2, 5] }, { rotateY: 160 }]
  },
  navText: {
    textAlign: "center",
    fontSize: 0.15,
    color: "#fff"
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 1,
    height: 0.5,
    borderRadius: 0.2,
    borderWidth: 0.02,
    backgroundColor: "#fff"
  },
  navItemText: {
    textAlign: "center",
    fontSize: 0.2,
    color: "steelblue"
  }
});

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps, { changeLocation })(Uni1);
