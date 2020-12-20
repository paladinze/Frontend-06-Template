const net = require('net');

class ResponseParser {
    constructor() {
    }

    receive(string) {
        for(let i=0; i< string.length; i++) {
            this.receiveChar(string.charAt(i));
        }
    }
    receiveChar(char) {

    }

}

class Request {
    constructor(options) {
        this.method = options.method || "GET";
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || '/' ;
        this.body = options.body || {};
        this.headers = options.headers || {};

        if (!this.headers['Content-Type']) {
            this.headers['Content-Type'] = "application/x-www-form-urlencoded";
        }

        if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            this.bodyText = Object
                .keys(this.body)
                .map((key) => {
                return `${key}=${encodeURIComponent(this.body[key])}`
            }).join('&');
        } else if (this.headers['Content-Type'] === 'application/json') {
            this.bodyText = JSON.stringify(this.body);
        }
        this.headers['Content-Length'] = this.bodyText.length;

    }

    toString() {
        return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map((key) => `${key}: ${this.headers[key]}`).join(`\r\n`)}\r
\r
${this.bodyText}`
    }

    send(connection) {
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser;

            // get tcp/ip connection and send request
            if (connection) {
                connection.write(this.toString());
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port,
                }, () => {
                    console.log(this.toString());
                    connection.write(this.toString());
                });
            }

            // parse response
            connection.on('data', (chunk) => {
                console.log(chunk.toString());
                parser.receive(chunk.toString());
                if (parser.isFinished) {
                    resolve(parser.response);
                    connection.end();
                }
            });

            // handle error
            connection.on('error', (err) => {
                reject(err);
                connection.end();
            });

            resolve('ok');
        })

    }

}

void async function () {
    const request = new Request({
        method: 'POST',
        host: '127.0.0.1',
        port: '8088',
        path: "/",
        headers: {
            ["x-foo"]: "some value"
        },
        body: {
            name: "paladinze"
        }
    });

    let response = await request.send();
    console.log(response)
}();