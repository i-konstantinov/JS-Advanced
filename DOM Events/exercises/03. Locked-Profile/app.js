function lockedProfile() {
    // add toggle event listener to all profile btns

    // querySelector chaining - '.profile button'
    // get all button elements of all profile elements
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(b => b.addEventListener('click', onToggle));
    

    // find associated profile items
    // if it's visible -> hide it and display label 'Show more'
    // otherwise -> show it na display label 'Hide it'
    function onToggle(ev) {
        const profile = ev.target.parentElement;

        // можем да добавяне повече от един атрибут на търсеният елемент
        // ако профлът е активен , значи е отключен и обратно
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            // querySelectorAll връща всички div-ове
            // find връща само този елемент, от тях, който 
            // има id (стринг), чиято стойност включва определеният подстринг
            // filter работи по същият начин, но връща списък
            const infoDiv = Array
            .from(profile.querySelectorAll('div'))
            .find(d => d.id.includes('HiddenFields'));
        
            if (ev.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else {
                ev.target.textContent = 'Show more';
                infoDiv.style.display = 'none';
            }
        }
    }
}   
