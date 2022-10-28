const { pathToRegexp } = require("path-to-regexp");

function compilePath(path, options) {
  const keys = [];
  const regexp = pathToRegexp(path, keys, options);
  return { keys, regexp };
}

/**
 * 把地址栏中的路径和路由配置属性中的path进行匹配，返回匹配后的结果
 * @param {*} pathname
 * @param {*} options
 */
function matchPath(pathname, options = {}) {
  let {
    path = "/",
    exact = false,
    strict = false,
    sensitive = false,
  } = options;
  let { keys, regexp } = compilePath(path, { end: exact, strict, sensitive });
  let match = regexp.exec(pathname);
  if (!match) return null;
  const [url, ...groups] = match;
  const isExact = pathname === url;
  return {
    path, // Route里面的路径
    url, // 正则匹配到的浏览器路径的部分
    isExact,
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = groups[index];
      return memo;
    }, {}),
  };
}

export default matchPath;
