 var Container = function(x) {
     this.__value = x
 }
 
 Container.of = x => new Container(x)
 
 Container.prototype.map = function(f) {
     return Container.of(f(this.__value))
 }
 
 Container.of(3)
    .map(x => x + 1)
    .map(x => 'Result is ' + x)