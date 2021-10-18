function createProcessor() {
    let state = '';

    return {
        append,
        removeStart,
        removeEnd,
        print,
    }

    function append(str) {
        state += str;
    }

    function removeStart(n) {
        state = state.slice(n);
    }

    function removeEnd(n) {
        state = state.slice(0, -n);
    }

    function print() {
        console.log(state);
    }
}

const processor = createProcessor();
processor.append('hello');
// processor.print();
processor.append('again');
// processor.print();
processor.removeStart(3);
// processor.print();
processor.removeEnd(4);
processor.print();
