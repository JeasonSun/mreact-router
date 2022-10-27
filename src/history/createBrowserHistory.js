/**
 * 工厂方法，返回一个history对象
 * @param {*} props
 * @returns
 */
function createBrowserHistory(props) {
  console.log("工厂方法,createBrowserHistory");
  const globalHistory = window.history;
  let listeners = [];

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    globalHistory.goBack();
  }

  function goForward() {
    globalHistory.goForward();
  }

  // popstate 在出栈的时候会监听到， 比如原生的 go goBack back 方法
  window.addEventListener("popstate", (event) => {
    const action = "POP";
    const location = {
      pathname: window.location.pathname,
      state: event.state,
    };
    setState({ action, location });
  });

  /**
   * push 方法
   * @param {*} to 跳转的路径
   * @param {*} nextState 跳转的状态
   */
  function push(to, nextState) {
    console.log("change push");
    const action = "PUSH";
    let pathname;
    let state;
    if (typeof to === "object") {
      pathname = to.pathname;
      state = to.state;
    } else {
      pathname = to;
      state = nextState;
    }

    globalHistory.pushState(state, null, pathname);
    let location = { state, pathname };
    setState({ action, location });
  }

  function setState(newState) {
    Object.assign(history, newState);
    history.length = globalHistory.length;
    listeners.forEach((listener) => listener(history.location));
  }

  function listen(listener) {
    listeners.push(listener);
    return function () {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  function block() {}

  const history = {
    action: "POP",
    push,
    go,
    goBack,
    goForward,
    listen,
    location: {
      pathname: window.location.pathname,
      state: globalHistory.state,
    },
    block,
  };
  return history;
}

export default createBrowserHistory;
