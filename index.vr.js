import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet,
  VrButton
} from "react-vr";

import { mainPlaces, lib } from "./src/data";
import Library from "./src/Library";

export default class Campus extends React.Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
      location: {
        name: "S-Bahn Station",
        image: "sbahnstation.jpg",
        id: 1
      }
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
                  onEnter={() => this.setState({ location: place })}
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

  changeState() {
    this.setState({ location: lib[0] });
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.state.location.image)} />

        {this.state.location.id === 1 || this.state.location.id === 2
          ? <VrButton style={styles.navButton} onEnter={() => this.toggleNav()}>
              {this.renderText()}
            </VrButton>
          : <View />}

        {this.state.location.id === 1 || this.state.location.id === 2
          ? this.renderNavOne()
          : <View />}

        {this.state.location.id === 2
          ? <Library onEnter={this.changeState.bind(this)} />
          : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navMenu: {
    width: 3,
    height: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    transform: [{ translate: [-3, 3.5, -6] }]
  },
  navButton: {
    backgroundColor: "rgba(200, 54, 54, 0.8)",
    width: 1,
    height: 1,
    borderRadius: 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.01,
    transform: [{ translate: [-4, 2, -5] }]
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

AppRegistry.registerComponent("Campus", () => Campus);
