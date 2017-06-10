import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

const places = [
  {
    name: "S Bahn",
    image: "sbahn.jpg",
    id: 1
  },
  {
    name: "S Bahn Entrance",
    image: "sbahn-top.jpg",
    id: 2
  }
];

export default class Campus extends React.Component {
  constructor() {
    super();
    this.state = { showNav: false, place: "sbahn.jpg" };
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

  renderNav() {
    if (this.state.showNav) {
      return (
        <View style={styles.navMenu}>
          {places.map(place => {
            return (
              <View
                style={styles.navItem}
                key={place.id}
                onEnter={() => this.setState({ place: place.image })}
              >
                <Text style={styles.navItemText}>
                  {place.name}
                </Text>
              </View>
            );
          })}
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.state.place)} />
        <View
          style={styles.navButton}
          onEnter={() => this.toggleNav()}
          // onExit={() => this.toggleNav()}
        >
          {this.renderText()}
        </View>
        {this.renderNav()}
      </View>
    );
  }
}

const styles = {
  navMenu: {
    width: 3,
    height: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    transform: [{ translate: [-4, 2, -6] }]
  },
  navButton: {
    backgroundColor: "#fff",
    width: 1,
    height: 0.5,
    borderRadius: 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.01,
    transform: [{ translate: [-4, 2, -5] }]
  },
  navText: {
    textAlign: "center",
    fontSize: 0.15,
    color: "rebeccapurple"
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 1,
    height: 1,
    borderRadius: 0.2,
    borderWidth: 0.02,
    backgroundColor: "#fff"
  },
  navItemText: {
    textAlign: "center",
    fontSize: "0.2",
    color: "steelblue"
  }
};

AppRegistry.registerComponent("Campus", () => Campus);
