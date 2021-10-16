function encodeAndDecodeMessages() {
    const main = document.getElementById('main');

    main.addEventListener('click', code);

    const senderTextArea = main.children[0].children[1];
    const receiverTextArea = main.children[1].children[1];
    
    function code(ev) {
        if (ev.target.tagName == 'BUTTON' && ev.target.type == 'submit') {
            const btn = ev.target;
            
            if (btn.textContent == 'Encode and send it') {
                let encodedMsg = '';
                for (let i=0; i<senderTextArea.value.length; i++) {
                    let currentLetterCode = senderTextArea.value.charCodeAt(i);
                    encodedMsg += String.fromCharCode(currentLetterCode + 1);
                }
                // receiverTextArea.disabled = true;
                receiverTextArea.value = encodedMsg;
                senderTextArea.value = '';
            } 
            else {
                let decodedMsg = '';
                for (let i=0; i<receiverTextArea.value.length; i++) {
                    let currentLetterCode = receiverTextArea.value.charCodeAt(i);
                    decodedMsg += String.fromCharCode(currentLetterCode - 1);
                }
                // receiverTextArea.disabled = false;
                receiverTextArea.value = decodedMsg;
            }
        }
    }
}
