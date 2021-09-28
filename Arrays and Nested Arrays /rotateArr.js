function rotate(arr, num) {
    let last;
    for (let i=1; i<num+1; i++) {
        last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}

rotate(['1', 
'2', 
'3', 
'4'], 
2)
rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)