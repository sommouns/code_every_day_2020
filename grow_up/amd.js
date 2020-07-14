let factories = {};
function define(modName, dependencies, factory) {
    factory.dependencies = dependencies;
    factories[modName] = factory;
}
function require(modNames, callback) {
    let loadedModNames = modNames.map(function (modName) {
        let factory = factories[modName];
        let dependencies = factory.dependencies;
        let exports;
        require(dependencies, function (...dependencyMods) {
            exports = factory.apply(null, dependencyMods);
        });
        return exports;
    })
    callback.apply(null, loadedModNames);
}


define('a', [], function () {
    return 'a';
});
define('b', ['a'], function (a) {
    return a + 'b';
});
// 导入和使用
require(['b'], function (b) {
    console.log(b);
});


define('a', [], function () {
    return 'a';
});
define('b', ['a'], function (a) {
    return a + 'b';
});
// 导入和使用
require(['b'], function (b) {
    console.log(b);
});