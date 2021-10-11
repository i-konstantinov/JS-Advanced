function deleteByEmail() {
    // select input value
    const address = document.getElementsByName('email')[0].value;
    document.getElementsByName('email')[0].value = '';

    // get tbody children
    let rows = document.querySelector('tbody').children

    // for every row...
    // - select second cell
    // - if textContent matches input value -> remove row
    let found = false;
    for (let i=0; i<rows.length; i++) {
        let email = rows[i].cells[1].textContent;
        if (email == address) {
            rows[i].remove();
            found = true;
        }
    }
    if (!found) {
        document.getElementById('result').textContent = 'Not found.'
    } else {
        document.getElementById('result').textContent = 'Deleted.'
    }
}