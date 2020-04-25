// 一道被面试了两次的eventloop面试题
async function async1() {
    console.log('async func1 start')
    await async2()
    console.log('async func1 end')
}

async function async2() {
    console.log('async func2')
}
async1()
console.log('code')

// async/await实际就是利用一个Promise（）
// 上面的async1可以理解为下面的代码
function async1() {
    console.log('aysnc fun1 start')
    new Promise((resolve) => {
        async2()
        resolve()
    }).then(() => {
        console.log('async func1 end')
    })
}