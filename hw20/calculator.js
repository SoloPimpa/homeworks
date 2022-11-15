const add = require("./add");
const sub = require("./sub");
const mult = require("./mult");
const div = require("./div");

module.exports = {
    add: (a, b) => add(a, b),
    sub: (a, b) => sub(a, b),
    mult: (a, b) => mult(a, b),
    div: (a, b) => div(a, b),
};