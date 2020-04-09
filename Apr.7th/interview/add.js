function add(a, b) {
    let aArr = a.split('').reverse();
    let bArr = b.split('').reverse();

    let flag = false;
    let res = []
    if (aArr.length < bArr.length) [aArr, bArr] = [bArr, aArr];

    for (let i = 0; i < aArr.length; i++) {
        let temp = 0;
        temp = bArr[i]
            ? +bArr[i] + +aArr[i] + (flag ? 1 : 0)
            : +aArr[i] + (flag ? 1 : 0);
        if (temp >= 10) {
            flag = true;
            temp = temp % 10;
        } else {flag = false}
        res.push(temp)
    }
    if (flag) res.push('1')
    return res.reverse().join('')
}
add('17', '5')