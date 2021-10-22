function sortTickets(arr, sortingCriterion) {
    const ticketsArr = [];

    class Ticket {
        constructor(d, p, s) {
            this.destination = d;
            this.price = p;
            this.status = s;
        }
    }

    // extracting info
    // filling the ticketsArr with new tickets
    for (let string of arr) {
        let[destinaton, price, status] = string.split('|');
        ticketsArr.push(new Ticket(destinaton, Number(price), status));
    }

    if (sortingCriterion == 'price') {
        ticketsArr.sort((a, b) => {
            return a.price - b.price;
        });
    } else {
        ticketsArr.sort((a, b) => {
            return a[sortingCriterion].localeCompare(b[sortingCriterion]);
        });
    }

    return ticketsArr;
}

console.log(sortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'))

console.log(sortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'))