

const symbols = ['Number', 'Whitespace', 'LineTerminator', '*', '/', '+', '-'];
const regexp = /([0-9.]+)|([ \t])|([\r\n])|(\*)|(\/)|(\+)|(-)/g;

function* tokenize (source) {
    let prevlastIndex;
    while (true) {
        let token = {
            type: null,
            value: null,
        };
        prevlastIndex = regexp.lastIndex;
        const result = regexp.exec(source);
        if (!result) break;
        if (regexp.lastIndex - prevlastIndex > result[0].length ) {
            // encounters unknown symbols
            break;
        }

        for (let i=0; i<symbols.length; i++) {
            if (result[i+1]) {
                token.type = symbols[i];
                token.value = result[i+1];
            }
        }
        yield token;
    }
    yield {
        type: 'EOF',
        value: null,
    }
}

const source = '10 + 2 * 3'

for (let token of tokenize(source)) {
    console.log(token);
}

