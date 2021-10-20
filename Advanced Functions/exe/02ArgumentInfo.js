function info(...args) {
    const items = {};
    
    for (let arg of args) {
        let argType = typeof(arg);
        if (!items[argType]) {
            items[argType] = 0;
        };
        items[argType] += 1;
        console.log(`${argType}: ${arg}`);
    }
    
    for (el of Object.entries(items).sort((a, b) => b[1] - a[1])) {
        console.log(`${el[0]} = ${el[1]}`);
    }
}

info({a:5}, 'cat', 42, {f:6}, function () { console.log('Hello world!'); });