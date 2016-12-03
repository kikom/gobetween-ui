const path = require('path'),
root_path = path.resolve(__dirname, '..');

module.exports = {
    root: function (args) {
        args = Array.prototype.slice.call(arguments, 0);
        return path.join.apply(path, [root_path].concat(args));
    }
};
