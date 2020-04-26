let str = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36'

let temp = []
str.replace(/\((.+?)\)/g, function(val) {
    return ''
})
// str.replace(/[0-9a-zA-Z]{1,}\/[0-9\.]{1,}/g, function(val, index) {
//     temp.push(val.split('/')[0])
// })

console.log(str)