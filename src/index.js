const Module = require('module')


const oldHook = Module._extensions['.js']

Module._extensions['.js'] = function (module, filename) {
  const oldCompile = module._compile


  console.log(oldCompile.toString())
  module._compile = function (code, filename) {
    let instrumented = code

    if (filename.match(/.*\.monit\.js/i)) {
      instrumented = instrumentCode(code)
    }

    module._compile = oldCompile
    console.log(module._compile(instrumented, filename))
  }

  oldHook(module, filename)
};


function instrumentCode(code) {
  const instrumentRegex = /instrument(.|\r?\n|\r)*endinstrument/gi

  return code.replace(instrumentRegex, 'function method2(){console.log("DERP")}')
}


// DEMO

require('../example/index.js')
