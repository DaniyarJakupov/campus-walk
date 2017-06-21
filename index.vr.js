import React from "react";
import { AppRegistry } from "react-vr";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import App from "./src/App";

export default class Campus extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("Campus", () => Campus);
