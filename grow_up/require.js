let fs = require('fs')
let path = require('path');
let b = require('./b.js')
function myRequire(mod) {
    // 获取路径
    let filename = path.resolve(__dirname, mod)
    let content = fs.readFileSync(filename)
    
    let fn = new Function('exports', 'require', 'module', '__filename', '__dirname', content + '\n return module.exports')
    let module = {
        exports: {}
    }
    
    return fn(module.exports, myRequire, module, __filename, __dirname)
}
console.log('parent ', this)
console.log(b)