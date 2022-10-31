import { Route } from "../react-router";
import Link from "./Link";
function NavLink(props) {
  const {
    to: path,
    className: classNameProp = "",
    style: styleProp = {},
    activeClassName = "active",
    activeStyle = {},
    exact,
    children,
  } = props;

  return (
    <Route
      path={path}
      exact={exact}
      children={({ match }) => {
        let className = match
          ? joinClassName(classNameProp, activeClassName)
          : classNameProp;
        let style = match ? { ...styleProp, ...activeStyle } : styleProp;
        let linkProps = {
          to: path,
          children,
          className,
          style,
        };
        return <Link {...linkProps} />;
      }}
    />
  );
}

function joinClassName(...classNames) {
  return classNames.filter((c) => c).join(" ");
}

export default NavLink;
