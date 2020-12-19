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
    if (char === 'b') return foundAB;
    return start(char);
}

function foundAB(char) {
    if (char === 'a') return foundABA;
    return start(char);
}

function foundABA(char) {
    if (char === 'b') return foundABAB;
    return start(char);
}

function foundABAB(char) {
    if (char === 'a') return foundABABA;
    return start(char);
}

function foundABABA(char) {
    if (char === 'b') return foundABABAB;
    return start(char);
}

function foundABABAB(char) {
    if (char === 'x') return end;
    return foundABAB(char);

}

console.log(match('the string: kkkabababxkkk')); // true
console.log(match('the string: kkkdbababakkk')); // false
console.log(match('the string: kkkabababakkk')); // false