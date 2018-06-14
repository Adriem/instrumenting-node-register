// TODO: Destructuring, module.exports.key, module.exports[key],
// arrow functions, var/let/conts = func

instrument
function method2 (...params) {
  console.log('method2', ...params);
}
endinstrument

module.exports = exports = {
  method1: function (...params) {
    console.log('method1', ...params);
  },
  method2: method2
}
