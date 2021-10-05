function colorize() {
    // get all rows
    const rows = document.querySelectorAll('table tr');

    // colorize only unevens
    for (let i=1; i<rows.length; i+=2) {
        rows[i].style.backgroundColor = 'teal';
    }
}