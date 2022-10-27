import React from "react";
import RouterContext from "./RouterContext";

class Route extends React.Component {
  static contextType = RouterContext;
  render() {
    let renderElement = null;
    let { location, history } = this.context;
    let { path, component:RouteComponent } = this.props;
    let match = location.pathname === path;
    let routeProps = {history, location}
    if (match) {
      renderElement = <RouteComponent {...routeProps}/>;
    }
    return renderElement;
  }
}

export default Route;
