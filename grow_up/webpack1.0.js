const pathLib = require('path');
const fs = require('fs');
let ejs = require('ejs');
let cwd = process.cwd();
let { entry, output: { filename, path } } = require(pathLib.join(cwd, './webpack.config.js'));
let script = fs.readFileSync(entry, 'utf8');
let modules = [];
script.replace(/require\(['"](.+?)['"]\)/g, function () {
    let name = arguments[1];
    let script = fs.readFileSync(name, 'utf8');
    modules.push({
        name,
        script
    });
});
let bundle = `
(function (modules) {
    function require(moduleId) {
        var module = {
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, require);
        return module.exports;
    }
    return require("<%-entry%>");
})
    ({
        "<%-entry%>":
            (function (module, exports, require) {
                eval(\`<%-script%>\`);
            })
       <%if(modules.length>0){%>,<%}%>
        <%for(let i=0;i<modules.length;i++){
            let module = modules[i];%>   
            "<%-module.name%>":
            (function (module, exports, require) {
                eval(\`<%-module.script%>\`);
            })
        <% }%>    
    });
`
let bundlejs = ejs.render(bundle, {
    entry,
    script,
    modules
});
try {
    fs.writeFileSync(pathLib.join(path, filename), bundlejs);
} catch (e) {
    console.error('编译失败 ', e);
}
console.log('compile sucessfully!');