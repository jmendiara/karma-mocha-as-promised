var path = require('path');

function createPattern(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

function getPath(pkg) {
  return path.dirname(require.resolve(pkg)) + '/';
}
function getMainScript(pkg) {
  var pth = getPath(pkg);
  return path.normalize(pth + require(pth + 'package.json').main);
}

var framework = function framework(files) {
  files.unshift(createPattern(getMainScript('mocha-as-promised')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:mocha-as-promised': ['factory', framework]};
