import React from "react";
import RouterContext from "./RouterContext";

/**
 * 需要外部传入一个history属性
 */
class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.history.location,
    };

    // 监听路径变化，当路径变化的时候， 执行回调，传入最新的路径
    this.unlisten = props.history.listen((location) => {
      this.setState({ location });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  static computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/",
    };
  }

  render() {
    let value = {
      location: this.state.location,
      history: this.props.history,
      match: Router.computeRootMatch(this.state.location.pathname),
    };
    return (
      <RouterContext.Provider value={value}>
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}

export default Router;
