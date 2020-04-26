let child = 'qq.com'
let parent = 'qq.com'
if (parent === '') {
    console.log('no')
} else
    console.log(new RegExp(parent + '$').test(child))