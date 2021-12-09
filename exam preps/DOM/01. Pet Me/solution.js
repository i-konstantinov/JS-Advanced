function solve() {
    const fields = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3]
    }

    addBtn.addEventListener('click', onAdd);

    function onAdd(ev) {
        ev.preventDefault();

        const name = input.name.value;
        const age = Number(input.age.value);
        const kind = input.kind.value;
        const owner = input.owner.value;

        if (name == '' || Number.isNaN(age) || kind == "" || owner == '') {
            return;
        }

        petList.appendChild(createEntry(name, age, kind, owner));

        [fields[0], fields[1], fields[2], fields[3]].forEach(i => i.value = '');
    }
    
    function createEntry(name, age, kind, owner) {
        const pet = document.createElement('li');
        
        const p = document.createElement('p');

        p.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;

        const span = document.createElement('span');
        span.textContent = `Owner: ${owner}`;

        const contactBtn = document.createElement('button');
        contactBtn.textContent = "Contact with owner";
        contactBtn.addEventListener('click', onContact);

        const fragment = document.createDocumentFragment();
        [p, span, contactBtn].forEach(e => fragment.appendChild(e));
  
        pet.appendChild(fragment);

        return pet;
    }

    function onContact(ev) {

        const entry = ev.target.parentElement;
        entry.querySelector('button').remove();
        
        const div = document.createElement('div');
        
        const input = document.createElement('input');
        input.placeholder = "Enter your names";

        const adoptBtn = document.createElement('button');
        adoptBtn.textContent = "Yes! I take it!";
        adoptBtn.addEventListener('click', onYes);

        div.appendChild(input);
        div.appendChild(adoptBtn);

        entry.appendChild(div);
    }

    function onYes(ev) {
        const newOwner = ev.target.parentElement.querySelector('input').value;
        if (newOwner != '') {
        
            const entry = ev.target.parentElement.parentElement;

            entry.querySelector('div').remove();

            entry.querySelector('span').textContent = `New Owner: ${newOwner}`;

            const checkedBtn = document.createElement('button');
            checkedBtn.textContent = 'Checked';
            checkedBtn.addEventListener('click', onChecked);

            entry.appendChild(checkedBtn);

            adoptedList.appendChild(entry);

        } else {
            return;
        }
    }

    function onChecked(ev) {
        const pet = ev.target.parentElement;
        adoptedList.remove(pet);
    }
}


