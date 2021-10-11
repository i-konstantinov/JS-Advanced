function focused() {
    Array
        .from(document.getElementsByTagName('input'))
        .forEach(f => {
            f.addEventListener('focus', onFocus);
            f.addEventListener('blur', onBlur);
        });

    function onFocus(event) {
        event.target.parentNode.classList.add('focused');
    }

    function onBlur(event) {
        event.target.parentNode.classList.remove('focused');
    }
}   
