

const symbols = ['Number', 'Whitespace', 'LineTerminator', '*', '/', '+', '-'];
const regexp = /([0-9.]+)|([ \t])|([\r\n])|(\*)|(\/)|(\+)|(-)/g;

const tokenize = (source) => {
    while (true) {
        const result = regexp.exec(source);
        if (!result) break;
        for (let i=0; i<symbols.length; i++) {
            if (result[i+1]) {
                console.log(symbols[i]);
            }
        }
        console.log(result);
    }
}

const source = '10 + 2 * 3'

tokenize(source)
