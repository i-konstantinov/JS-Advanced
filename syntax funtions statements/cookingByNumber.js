function operations(num, op1, op2, op3, op4, op5) {
    let initial = Number(num);
    let arr = [op1, op2, op3, op4, op5];

    function chop(n) {
        return n / 2;
    }

    function dice(n) {
        return Math.sqrt(n);
    }

    function spice(n) {
        return n + 1;
    }

    function bake(n) {
        return n * 3;
    }

    function fillet(n) {
        return (n * 0.8).toFixed(1);
    }

    let opMapper = {
        'chop': chop,
        'dice': dice,
        'spice': spice,
        'bake': bake,
        'fillet': fillet,
    }

    for (let i = 0; i < arr.length; i++) {
        let opName = arr[i];
        let op = opMapper[opName];
        
        initial = op(initial);
        
        console.log(initial);
    }
}


operations('32', 'chop', 'chop', 'chop', 'chop', 'chop');
operations('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
