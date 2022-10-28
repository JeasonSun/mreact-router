const { pathToRegexp } = require("path-to-regexp");
const keys = [];
const regexp = pathToRegexp("/home/:id/:name", keys, { end: false });
console.log(regexp);
console.log(regexp.exec('/home/15/a?a=3'), keys);
