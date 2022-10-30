import React from "react";
import RouterContext from "./RouterContext";
import LifeCycle from "./LifeCycle";

function Redirect({ to }) {
  return (
    <RouterContext.Consumer>
      {(value) => {
        const { history } = value;
        return <LifeCycle onMount={() => history.push(to)} />;
      }}
    </RouterContext.Consumer>
  );
}

export default Redirect;
