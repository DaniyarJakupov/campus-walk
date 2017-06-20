import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Stylesheet,
  VrButton
} from "react-vr";

const places = [
  {
    name: "S Bahn Station",
    image: "sbahnstation.jpg",
    id: 1
  },
  {
    name: "S Bahn",
    image: "sbahn.jpg",
    id: 2
  },
  {
    name: "S Bahn Entrance",
    image: "sbahn-top.jpg",
    id: 3
  },
  {
    name: "Pfaffenwaldring 47e",
    image: "pfaffen47.jpg",
    id: 4
  },

  {
    name: "QUad",
    image: "quad.jpg",
    id: 5
  },

  {
    name: "Library & Cafeteria",
    image: "libcafe.jpg",
    id: 6
  }
];

export default class Campus extends React.Component {
  constructor() {
    super();

    this.state = {
      showNav: false,
      place: "sbahnstation.jpg",
      location: { lat: "20", lng: "75" }
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

  geolocation() {
    return (
      <Text style={styles.geoText}>
        Latitude:
        {this.state.location.lat}
        , Longitude:
        {this.state.location.lng}
      </Text>
    );
  }

  renderNav() {
    if (this.state.showNav) {
      return (
        <View>
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
        <View style={styles.location}>
          {this.geolocation()}
        </View>
      </View>
    );
  }
}

const styles = {
  navMenu: {
    width: 3,
    height: 1,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    transform: [{ translate: [-5, 3.5, -6] }]
  },
  navButton: {
    backgroundColor: "#fff",
    width: 0.5,

    height: 0.5,
    borderRadius: 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.01,
    transform: [{ translate: [-4, 2, -5] }]
  },
  navText: {
    textAlign: "center",
    fontSize: 0.1,
    color: "rebeccapurple"
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 0.7,

    height: 1,
    borderRadius: 0.2,
    borderWidth: 0.02,
    backgroundColor: "#fff"
  },
  navItemText: {
    textAlign: "center",
    fontSize: 0.11,
    color: "steelblue"
  },
  location: {
    width: 7,
    flexDirection: "row",
    transform: [{ translate: [-3, 1, -5] }]
  },
  geoText: {
    fontSize: 0.7,
    color: "red"
  }
};

AppRegistry.registerComponent("Campus", () => Campus);
