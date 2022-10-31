import React from "react";
import {
  matchPath,
  __RouterContext as RouterContext,
} from "../react-router-dom";

export function useHistory() {
  const contextValue = React.useContext(RouterContext);
  return contextValue.history;
}

export function useLocation() {
  const contextValue = React.useContext(RouterContext);
  return contextValue.location;
}

export function useParams() {
  
  const contextValue = React.useContext(RouterContext);
  // TODO: 这边的 params 不正确， 因为没有更新match
  return contextValue.match.params;
}

export function useRouteMatch(path) {
  let { location, match } = React.useContext(RouterContext);
  return path ? matchPath(location.pathname, path) : match;
}
