const Vue = require('vue')
const app = new Vue({
    template: '<div>hello {{name}}<button @click="test">test</button></div>',
    data: {
        name: 'time'
    },
    methods: {
        test() {
            console.log(1)
        }
    }
})


const renderer = require('vue-server-renderer').createRenderer({
    template: `<!DOCTYPE html>
    <html lang="en">
      <head><title>Hello</title></head>
      <body>
       <div id="app">
       <!--vue-ssr-outlet-->
       </div>
      </body>
    </html>`
})

renderer.renderToString(app, (err, html) => {
    if (err) {
        throw err
    }
    
    console.log(html)
})