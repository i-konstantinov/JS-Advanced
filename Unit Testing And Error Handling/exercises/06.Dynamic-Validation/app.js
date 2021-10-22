function validate() {
    const emailInputField = document.getElementById('email');
    emailInputField.addEventListener('change', checkValue);
    const emailRegex = /(^[a-z]+\@[a-z]+\.[a-z]+$)/;
    
    function checkValue(e) {
        if(!emailRegex.test(emailInputField.value)) {         
            emailInputField.className = 'error';
        } else {        
            emailInputField.className = '';
        }
    }
}