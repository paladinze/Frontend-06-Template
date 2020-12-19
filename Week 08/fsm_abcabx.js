// FSM for finding 'abcabx' in a string

function match(str) {
    let state = start;
    for (let char of str) {
        state = state(char);
    }
    return state === end;
}

function start(char) {
    if (char === 'a') return foundA;
    return start;
}

function end(char) { // trap: the terminal state
    return end;
}

function foundA(char) {
    if (char === 'b') return foundB;
    return start(char);
}

function foundB(char) {
    if (char === 'c') return foundC;
    return start(char);
}

function foundC(char) {
    if (char === 'a') return foundABCA;
}

function foundABCA(char) {
    if (char === 'b') return foundABCAB;
    return start(char);
}

function foundABCAB(char) {
    if (char === 'x') return end;
    return foundB(char);
}

console.log(match('the string: kkkabcabxkkk')); // true
console.log(match('the string: kkkabcabakkk')); // false