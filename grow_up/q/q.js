let fs = require('fs')
let path = require('path')
function defer() {
    var pending = [], value
    
    return {
        resolve: function(_value) {
            if (pending) {
                value = _value
                pending.forEach(callback => callback(_value))
            }
            pending = undefined
        },
        
        reject: function(err) {
            new Error(err)
            pending = undefined
        },
        
        promise: {
            then: function(cb) {
                if(pending) {
                    pending.push(cb)
                } else {
                    callback(value)
                }
            }
        }
    }
}

function read(filename) {
    var deferred = defer();
    fs.readFile(filename,'utf8', function (err, data) {
        if(err){
            deferred.reject(err);
        }else{
            deferred.resolve(data);
        }
    });
    return deferred.promise;
}
read(path.join(__dirname, 'test.txt'))
    .then(res => {
        console.log(res)
    })