let a = {
    b: function() {
        console.log(this.name)
    },
    name: 1
}
this.name = '13231s'

let c = a.b.bind(this)
c()