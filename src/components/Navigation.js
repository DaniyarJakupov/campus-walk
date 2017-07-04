import React, { Component } from "react";
import { asset, Text, View, StyleSheet, VrButton } from "react-vr";
import { connect } from "react-redux";

import { mainPlaces } from "../data";

import { changeLocation } from "../redux/actions";

class Navigation extends Component {
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
        <VrButton style={styles.navButton} onEnter={() => this.toggleNav()}>
          {this.renderText()}
        </VrButton>

        {this.renderNavOne()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navMenu: {
    width: 4,
    height: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    transform: [{ translate: [-1.5, 4, 6] }, { rotateY: 160 }]
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
    fontSize: 0.2,
    color: "#fff"
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 1.3,
    height: 0.4,
    borderRadius: 0.2,
    borderWidth: 0.02,
    backgroundColor: "#fff"
  },
  navItemText: {
    textAlign: "center",
    fontSize: 0.15,
    color: "steelblue"
  }
});

export default connect(null, { changeLocation })(Navigation);
