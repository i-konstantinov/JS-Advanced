function validCheck(x1, y1, x2, y2) {

    let dist1 = Math.sqrt( ((0 - x1)**2) + ((0 - y1)**2) );
    let dist2 = Math.sqrt( ((0 - x2)**2) + ((0 - y2)**2) );
    let dist3 = Math.sqrt( ((x2 - x1)**2) + ((y2 - y1)**2) );

    console.log( `{${x1}, ${y1}} to {0, 0} is ${dist1 === parseInt(dist1, 10) ? 'valid' : 'invalid'}` );
    console.log( `{${x2}, ${y2}} to {0, 0} is ${dist2 === parseInt(dist2, 10) ? 'valid' : 'invalid'}` );
    console.log( `{${x1}, ${y1}} to {${x2}, ${y2}} is ${dist3 === parseInt(dist3, 10) ? 'valid' : 'invalid'}` );
}

validCheck(3,0,0,4);
validCheck(2,1,1,1);
