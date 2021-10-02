function location(arr) {
    function roundToTwo(num) {    
        return +(Math.round(num + "e+2")  + "e-2");
    };

    let result = [];
    for (i=1; i<arr.length; i++) {
        let data = arr[i].slice(2, arr[i].length - 2);
        let [name, lat, long] = data.split(' | ');

        result.push({
            'Town': name,
            'Latitude': roundToTwo(Number(lat)),
            // Number(Number().toFixed()) играе ролята на функцията roundToTwo!
            'Longitude': Number(Number(long).toFixed(2)),
        });
    }
    console.log(JSON.stringify(result));
}

location(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])