function solve() {
    const [name, hall, price] = document.querySelectorAll('#container input');
    
    const onScreenBtn = document.querySelector('#container button');
    onScreenBtn.addEventListener('click', addMovie);
    
    const moviesList = document.querySelector('#movies ul');

    const archiveList = document.querySelector('#archive ul');
    
    const clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', deleteAllElements);

    function addMovie(ev) {
        // ev.preventDefault() спира дифолтното поведение на страницата, когато ev се случи
        // трябваше да го използваме , защото страницата презареждаше, когато се натисне бутона
        // и нищо не се запаваше никъде в DOMa
        ev.preventDefault();

        if (name.value != '' && hall.value != '' && price.value != '' && !isNaN(Number(price.value))) {
            const movieElement = document.createElement('li');
            movieElement.innerHTML = `
            <span>${name.value}</span>
            <strong>Hall: ${hall.value}</strong>
            <div>
                <strong>${Number(price.value).toFixed(2)}</strong>
                <input placeholder="Tickets sold">
                <button>Archive</button>
            </div>
            `;
            name.value = '';
            hall.value = '';
            price.value = '';

            movieElement.querySelector('button').addEventListener('click', addToArchive);
            
            moviesList.appendChild(movieElement);
        }
    }

    function addToArchive(ev) {
        const movieEntry = ev.target.parentElement.parentElement;
        const ticketsCount = movieEntry.querySelector('input').value;
        if (ticketsCount != '' && !isNaN(ticketsCount)) {
            const movieTotal = Number(movieEntry.children[2].children[0].textContent) * ticketsCount;
            movieEntry.querySelector('div').remove();
            movieEntry.querySelector('strong').remove();
            movieEntry.innerHTML += `<strong>Total amount: ${movieTotal.toFixed(2)}</strong>
            <button>Delete</button>`;
            
            movieEntry.querySelector('button').addEventListener('click', deleteElement);
            
            archiveList.appendChild(movieEntry);
        }
    }

    function deleteElement(ev) {
        ev.target.parentElement.remove();
    }

    function deleteAllElements(ev) {
        Array.from(archiveList.children).forEach(el => el.remove());
    }
}
