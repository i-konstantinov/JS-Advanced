class Request {
    constructor(method, uri, ver, msg, f=false) {
        this.method = method;
        this.uri = uri;
        this.version = ver;
        this.message = msg;
        this.response = undefined;
        this.fulfilled = f;
    }
}
let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);