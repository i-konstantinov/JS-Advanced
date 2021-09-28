function arrOps(arr) {
    let counter = 0;
    let resultArr = Array();

    for (i=0; i<arr.length; i++) {
        counter += 1;
        if (arr[i]==='add') {
            resultArr.push(counter);
        }
        else {
            resultArr.pop();
        }
    }
    
    if (resultArr.length === 0) {
        console.log('Empty')
    }
    else {
        console.log(resultArr.join("\n"));
    }
}

arrOps(['remove', 
'remove', 
'remove'])
