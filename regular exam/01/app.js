window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSongs);

    const addForm = document.getElementById('append-song').children[0].children[1].children[2];
    const genre = addForm.children[1];
    const name = addForm.children[3];
    const author = addForm.children[5];
    const date = addForm.children[7];

    const allHits = document.getElementById('all-hits').children[0];

    const totalHits = document.getElementById('total-likes').children[0].children[0];

    const savedHitsDiv = document.getElementById('saved-hits').children[0];

    function likeSong(ev) {
        let text = totalHits.textContent.slice(0, 13)
        let number = Number(totalHits.textContent.slice(13))
        number++;
        totalHits.textContent = text + number;
        ev.target.disabled = 'true';
    }

    function saveSong(ev) {
        let currentSong = ev.target.parentElement;
        savedHitsDiv.appendChild(currentSong);
        currentSong.children[5].remove();
        currentSong.children[5].remove();
    }
    

    function addSongs(ev) {
        ev.preventDefault()

        if (genre.value && name.value && author.value && date.value) {
            const songDiv = document.createElement('div');
            songDiv.className = 'hits-info';
            songDiv.innerHTML = `
            <img src="./static/img/img.png">
            <h2>Genre: ${genre.value}</h2>
            <h2>Name: ${name.value}</h2>
            <h2>Author: ${author.value}</h2>
            <h3>Date: ${date.value}</h3>
            <button class="save-btn">Save song</button>
            <button class="like-btn">Like song</button>
            <button class="delete-btn">Delete</button>
            `
            songDiv.children[5].addEventListener('click', saveSong);
            songDiv.children[6].addEventListener('click', likeSong);
            songDiv.children[7].addEventListener('click', (ev) => ev.target.parentElement.remove());
            
            allHits.appendChild(songDiv);
            
            genre.value = '';
            name.value = '';
            author.value = '';
            date.value = '';
        }
    }
}