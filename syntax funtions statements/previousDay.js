function calcPrevDay(y, m, d) {
    let dateString = `${y}-${m}-${d}`;
    let resultDate = new Date(dateString);
    resultDate.setDate(d-1);
    console.log(`${resultDate.getFullYear()}-${resultDate.getMonth()+1}-${resultDate.getDate()}`);
}

calcPrevDay(2016, 9, 30);
calcPrevDay(2016, 10, 1);
calcPrevDay(2016, 1, 1);
