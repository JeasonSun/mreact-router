function createHashHistory() {
  let stack = [];
  let index = -1;
  let action = "POP";
  let state = null;
  let listeners = [];

  function go(n) {
    action = "POP";
    index += n;
    if (index < 0) {
      index = 0;
    } else if (index >= stack.length) {
      index = stack.length - 1;
    }
    let nextLocation = stack[index];
    state = nextLocation.state;
    window.location.hash = nextLocation.pathname;
  }
  function goBack() {
    go(-1);
  }
  function goForward() {
    go(1);
  }
  const changeHash = () => {
    let pathname = window.location.hash.slice(1);
    const location = {
      pathname,
      state,
    };
    Object.assign(history, { action, location });
    if (action === "PUSH") {
      stack[++index] = history.location;
    }
    listeners.forEach((listener) => listener(history.location));
  };

  window.addEventListener("hashchange", changeHash);

  function listen(listener) {
    listeners.push(listener);
    return function () {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  function push(to, nextState) {
    action = "PUSH";
    let pathname;
    if (typeof to === "object") {
      state = to.state;
      pathname = to.pathname;
    } else {
      pathname = to;
      state = nextState;
    }
    window.location.hash = pathname;
  }

  function block() {}
  const history = {
    action,
    push,
    go,
    goBack,
    goForward,
    listen,
    location: { pathname: window.location.hash.slice(1), state: null },
    block,
  };
  // 主动触发一下跳转默认页面,往stack中加入一个记录
  if (window.location.hash) {
    action = "PUSH";
    changeHash();
  } else {
    window.location.hash = "/";
  }

  return history;
}

export default createHashHistory;
