window.addEventListener('load', solve);

function solve() {
    const form = document.querySelector('form');
    form.addEventListener('submit', onSend);

    const receivedOrders = document.getElementById('received-orders');

    const completedOrders = document.getElementById('completed-orders');
    completedOrders.querySelector('.clear-btn').addEventListener('click', (ev) => {
        completedOrders.innerHTML = '<h2>Completed orders:</h2><img src="./style/img/completed-order.png"><button class="clear-btn">Clear</button>';
    })

    function onSend(ev) {
        ev.preventDefault();

        const productType = document.getElementById('type-product').value;
        const description = document.getElementById('description').value;
        const clientName = document.getElementById('client-name').value;
        const clientPhone = document.getElementById('client-phone').value;

        if (description == "" || clientName == "" || clientPhone == "") {
            return
        } else {
            const order = createOrder({productType, description, clientName, clientPhone});
            receivedOrders.appendChild(order);
            form.reset();
        }
    }

    function createOrder(obj) {
        const container = document.createElement('div');
        container.className = "container";

        const h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${obj.productType}`;

        const h3 = document.createElement('h3');
        h3.textContent = `Client information: ${obj.clientName}, ${obj.clientPhone}`;

        const h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${obj.description}`;

        const startBtn = document.createElement('button');
        startBtn.className = 'start-btn';
        startBtn.textContent = 'Start repair';
        startBtn.addEventListener('click', (ev) => {
            ev.target.disabled = true;
            finishBtn.disabled = false;
            finishBtn.addEventListener('click', (ev) => {
                const currentOrder = ev.target.parentElement;
                currentOrder.querySelector('.start-btn').remove();
                currentOrder.querySelector('.finish-btn').remove();
                completedOrders.appendChild(currentOrder);
            })
        });


        const finishBtn = document.createElement('button');
        finishBtn.className = 'finish-btn';
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;
        

        [h2, h3, h4, startBtn, finishBtn].forEach(e => container.appendChild(e));

        return container;
    }
}