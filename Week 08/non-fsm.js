
// find 'a'
function findAInStr(str) {
    for (let char of str) {
        if (char === 'a') return true;
    }
    return false;
}

console.log(findAInStr('bacde'));
console.log(findAInStr('bc'));


// find 'ab'
function findAbInStr(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== 'a') continue;
        if (str[i+1] && str[i+1] === 'b') return true;
    }
    return false;
}

console.log(findAbInStr('cab'));
console.log(findAbInStr('caa'));

// find 'abcde'
function findAbcdeInStr(str) {
    const key = 'abcde';
    if (str < key.length) return false;
    if (str.substr(0, key.length) === key) return true;
    return findAbcdeInStr(str.substr(1));
}
console.log(findAbcdeInStr('gabcdef'));
console.log(findAbcdeInStr('abcdf'));