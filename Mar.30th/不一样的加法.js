let num1 = 'gfedcba'
let num2 = 'cba'


;(function() {
    let tempNum1 = num1.split('').reverse()
    let tempNum2 = num2.split('').reverse()
    let flag = false
    let res = []
    if (tempNum1.length < tempNum2.length)
        [tempNum1, tempNum2] = [tempNum2, tempNum1]
    for(let i = 0; i < tempNum1.length; i ++) {
        if (tempNum2[i]) {
            let {newFlag, num} = add(tempNum1[i], tempNum2[i], flag)
            if (newFlag) flag = newFlag
            res.push(num)
        } else {
            let {newFlag, num} = add2(tempNum1[i], flag)
            if (newFlag) flag = newFlag
            res.push(num)
        }
    }
    let str = 'a'.toUpperCase
    if (flag) {
        res.push('a')
    }
    
    function add(n1, n2, f) {
        let obj = {
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11,
            m: 12,
            n: 13,
            o: 14,
            p: 15,
            q: 16,
            r: 17,
            s: 18,
            t: 19,
            u: 20,
            v: 21,
            w:22,
            x:23,
            y:24,
            z:25
        }
        let res = obj[n1] + obj[n2]
        if (f) res += 1
        let newFlag = false
        if (res >= 26) {
            newFlag = true
        }
        let num = res % 26
        for(let key in obj) {
            if (obj[key] === num) {
                num = key
                break
            }
        }
        return {
            num,
            newFlag
        }
    }
    
    function add2(n1, f) {
        let obj = {
            a: 0,
            b: 1,
            c: 2,
            d: 3,
            e: 4,
            f: 5,
            g: 6,
            h: 7,
            i: 8,
            j: 9,
            k: 10,
            l: 11,
            m: 12,
            n: 13,
            o: 14,
            p: 15,
            q: 16,
            r: 17,
            s: 18,
            t: 19,
            u: 20,
            v: 21,
            w:22,
            x:23,
            y:24,
            z:25
        }
        let res = obj[n1]
        if (f) res += 1
        let newFlag = false
        if (res >= 26) {
            newFlag = true
        }
        let num = res % 26
        for(let key in obj) {
            if (obj[key] === num) {
                num = key
                break
            }
        }
        return {
            num,
            newFlag
        }
    }
    
    console.log(res.reverse().join(''))
})()