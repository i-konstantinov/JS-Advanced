function validate() {
    const companyCheckbox = document.getElementById('company');
    companyCheckbox.checked = false;
    companyCheckbox.addEventListener('change', revealCompanyInfo);

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submitFields);

    const companyInfoFieldset = document.getElementById('companyInfo');
    
    const valid = document.getElementById('valid');

    function revealCompanyInfo(ev) {
        if (companyInfoFieldset.style.display == 'none') {
            companyInfoFieldset.style.display = 'block';
        } else {
            companyInfoFieldset.style.display = 'none';
        }
    }

    function usernameCorrect(value) {
        if (!value
            || value.length < 3
            || value.length > 20
            || !/(^[a-zA-Z0-9]+$)/.test(value)) {
            return false;
        } 
        return true;
    }
   
    function emailCorrect(value) {
        if (!value || !/(.+@.+\..+)/.test(value)) {
            return false;
        } 
        return true;
    }

    function passwordCorrect(val1) {
        if (!val1 
            || val1.length < 5 
            || val1.length > 15 
            || !/([\w]+)/.test(val1)) {
            return false;
        }
        return true;
    }

    function numberCorrect(value) {
        if (!value || value < 1000 || value > 9999) {
            return false;
        } 
        return true;
    }

    function submitFields(ev) {
        ev.preventDefault();

        let incorrectName = false;
        let incorrectPass = false;
        let incorrectEmail = false;
        let incorrectNum = false;
        
        const username = document.getElementById('username');

        const email = document.getElementById('email');

        const password = document.getElementById('password');

        const confirmPassword = document.getElementById('confirm-password');

        if (!usernameCorrect(username.value)) {
            username.style.borderColor = 'red'
            incorrectName = true;
        } else {
            username.style.border = 'none';
        }

        if (!emailCorrect(email.value)) {
            email.style.borderColor = 'red';
            incorrectEmail = true;
        } else {
            email.style.border = 'none';
        }

        if (!passwordCorrect(password.value)) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            incorrectPass = true;
        } else if (!passwordCorrect(confirmPassword.value)) {
            confirmPassword.style.borderColor = 'red';
            incorrectPass = true;
        } else if (password.value != confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            incorrectPass = true;
        } else {
            password.style.border = 'none';
            confirmPassword.style.border = 'none';
        }

        if (companyCheckbox.checked) {
            const companyNumber = companyInfoFieldset.querySelector('input');
            if (!numberCorrect(companyNumber.value)){
                companyNumber.style.borderColor = 'red';
                incorrectNum = true;
            } else {
                companyNumber.style.border = 'none';
            }
        }

        if (incorrectName || incorrectEmail || incorrectPass || incorrectNum) {
            valid.style.display = 'none';
        } else {
            valid.style.display = 'block';
        }
    }
}
