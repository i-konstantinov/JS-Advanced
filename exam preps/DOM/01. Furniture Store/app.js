window.addEventListener('load', solve);

function solve() {
    // get data containers
    // configure event listeners
    const form = document.querySelector('form');
    form.addEventListener('submit', onAdd);

    const furnitureList = document.getElementById('furniture-list');

    const totalProfit = document.querySelector('.total-price');

    // add furniture
    // read fields
    // field validation
    // create row
    // configure event listeners
    function onAdd(ev) {
        ev.preventDefault();

        const model = document.getElementById('model').value;
        const year = Number(document.getElementById('year').value);
        const description = document.getElementById('description').value;
        const price = Number(document.getElementById('price').value);

        if (model == '' || description == '' || isNaN(year) || isNaN(price) || year < 0 || price < 0) {
            return;
        } else {
            const items = createRow({ model, year, description, price });

            items.forEach(e => furnitureList.appendChild(e));

            form.reset();
        }
    }

    function createRow(obj) {
        const result = [];

        const hidden = document.createElement('tr');
        hidden.className = 'hide';
        hidden.style.display = 'none';

        const year = document.createElement('td');
        year.textContent = `Year: ${obj.year}`;

        const desc = document.createElement('td');
        desc.colSpan = "3";
        desc.textContent = `Description: ${obj.description}`;

        hidden.appendChild(year);
        hidden.appendChild(desc);


        const info = document.createElement('tr');
        info.className = 'info';

        const model = document.createElement('td');
        model.textContent = obj.model;

        const price = document.createElement('td');
        price.textContent = (obj.price).toFixed(2);

        const buttons = document.createElement('td');

        const moreInfoBtn = document.createElement('button');
        moreInfoBtn.className = 'moreBtn';
        moreInfoBtn.textContent = 'More Info';

        // more info
        // toggle style display
        // change btn text
        moreInfoBtn.addEventListener('click', (ev) => {
            if (hidden.style.display == 'none') {
                hidden.style.display = 'contents';
                ev.target.textContent = 'Less Info';
            } else {
                hidden.style.display = 'none';
                ev.target.textContent = 'More Info';
            }
        });
        buttons.appendChild(moreInfoBtn);

        // buy it
        // get item and remove it
        // increase total profit
        const buyItBtn = document.createElement('button');
        buyItBtn.className = 'buyBtn';
        buyItBtn.textContent = 'Buy it';
        buyItBtn.addEventListener('click', (ev) => {
            totalProfit.textContent = (Number(totalProfit.textContent) + obj.price).toFixed(2);
            info.remove();
            hidden.remove();
        });
        buttons.appendChild(buyItBtn);

        [model, price, buttons].forEach(e => info.appendChild(e));

        result.push(info, hidden);

        return result;
    }

}
