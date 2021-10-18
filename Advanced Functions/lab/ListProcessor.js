function ListProcessor(commandList) {
    let innerList = [];
    execEngine = {
        add: (str) => innerList.push(str),
        remove: (str) => innerList = innerList.filter(el => (el != str)),
        print: (str) => console.log(innerList.join(',')),
    }

    for (el of commandList) {
        let [key, val] = el.split(' ');
        execEngine[key](val);
    }
}

ListProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
