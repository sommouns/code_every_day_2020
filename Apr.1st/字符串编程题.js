function uppercaseSecondWord(str) {
    let temp = str.split(' ')
    temp.forEach((v, i) => {
        if (temp[i].length>=2) {
            temp[i] = temp[i][0] + temp[i][1].toUpperCase() + temp[i].slice(2)
        }
    })
    return temp.join(' ')
}

uppercaseSecondWord('My name is x')