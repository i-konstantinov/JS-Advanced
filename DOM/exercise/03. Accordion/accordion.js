function toggle() {

    const btn = document.getElementsByClassName('button')[0];
    if (btn.textContent == 'More') {
        btn.textContent = 'Less';
    }
    else {
        btn.textContent = 'More';
    }

    let extraDisplay = document.getElementById('extra').style.display;
    if (extraDisplay == '' || extraDisplay == 'none') {
        extraDisplay = 'block';
    } else {
        extraDisplay = 'none';
    }
    document.getElementById('extra').style.display = extraDisplay;
}