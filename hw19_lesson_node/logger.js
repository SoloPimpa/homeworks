const cow = require('cowsay');

function log(msg) {

    console.log(
        cow.think({
            text: msg,
        })
    );
}

module.exports = {
    log: log,
};