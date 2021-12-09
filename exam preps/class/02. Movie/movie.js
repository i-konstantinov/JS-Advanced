class Movie {
    constructor(name, price) {
        this.movieName = name;
        this.ticketPrice = Number(price);
        this._totalProfit = 0;
        this._ticketsSold = 0;
        this.screenings = [];
    }


    newScreening(date, hall, description) {
        let available = true;
        for (let s of this.screenings) {
            if (s.date == date && s.hall == hall) {
                available = false;
                break;
            }
        }
        
        if (available) {
            this.screenings.push({
                date,
                hall,
                description
            });
            return `New screening of ${this.movieName} is added.`;
        } else {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
    }


    endScreening(date, hall, soldTickets) {
        let screening = false;
        for (let s of this.screenings) {
            if (s.date == date && s.hall == hall) {
                screening = s;
                break;
            }
        }

        if (screening == false) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);

        } else {
            const currentProfit = this.ticketPrice * soldTickets;

            this._totalProfit += currentProfit;
            
            this._ticketsSold += soldTickets;
            
            const index = this.screenings.indexOf(screening);
            
            this.screenings.splice(index, 1);

            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
        }
    }

    
    toString() {
        const result = [
            `${this.movieName} full information:`,
            `Total profit: ${(this._totalProfit).toFixed(0)}$`,
            `Sold Tickets: ${this._ticketsSold}`,
        ]
        if (this.screenings.length == 0) {
            result.push("No more screenings!");

        } else {
            result.push("Remaining film screenings:");
        
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall)).forEach(e => result.push(`${e.hall} - ${e.date} - ${e.description}`));
        }

        return result.join('\n');
    }
}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
// console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
// console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
