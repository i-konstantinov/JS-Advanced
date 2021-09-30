function monthPrint(n) {
    switch (n) {
        case 1:
            console.log('jan');
            break;
        case 2:
            console.log('feb');
            break;
        case 3:
            console.log('mar');
            break;
        case 4:
            console.log('apr');
            break;
        case 5:
            console.log('may');
            break;
        case 6:
            console.log('jun');
            break;
        case 7:
            console.log('jul');
            break;
        case 8:
            console.log('aug');
            break;
        default:
            console.log('Error!')

    }
}
monthPrint(2)
monthPrint(13)
// monthPrint(-1)
// monthPrint(22)


// function showMonth(n) {
//     if (n > 0 && n < 13) {
//         console.log(`month: ${n}`)
//     } else {
//         console.log("error")
//     }
// }
// showMonth(3)
// showMonth(8)
// showMonth(-2)
// showMonth(112)

function displayMonth(n) {
    let months = {
        1: 'jan',
        2: 'feb',
        3: 'mar',
        4: 'apr',
        5: 'may',
        6: 'jun',
        7: 'jul',
        8: 'aug',
        9: 'sep',
        10: 'oct',
        11: 'nov',
        12: 'dec',
        info: 'this is a calendar',
    }
    if (n in months) {
        console.log(months[n])
    } else {
        console.log('error!!')
    }
    // console.log(months.info)
}

displayMonth(3)
displayMonth(11)
displayMonth(13)
