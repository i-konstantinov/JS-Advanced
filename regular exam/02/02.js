class SummerCamp {
    constructor(org, loc) {
        this.organizer = org;
        this.location = loc;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    playerPresent(name) {
        for (let playerObj of this.listOfParticipants) {
            if (name == playerObj.name) {
                return true;
            }
        }
        return false;
    }

    getPlayerByName(name) {
        for (let playerObj of this.listOfParticipants) {
            if (name == playerObj.name) {
                return playerObj;
            }
        }
    }

    registerParticipant(name, condition, money) {
        if (!Object.keys(this.priceForTheCamp).includes(condition)) {
            try {
                throw new Error("Unsuccessful registration at the camp.")
            } catch (ex) {
                return `Uncaught Error: ${ex.message}`
            }
        } else if (this.playerPresent(name)) {
            return `The ${name} is already registered at the camp.`
        } else if (Number(money) < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.'
        } else {
            this.listOfParticipants.push({
                name: name,
                condition: condition,
                power: 100,
                wins: 0,
            });
            return `The ${name} was successfully registered.`
        }
    }

    unregisterParticipant(name) {
        let participantIndex;
        let isPresent = false;
        for (let obj of this.listOfParticipants) {
            if (obj.name == name) {
                participantIndex = this.listOfParticipants.indexOf(obj);
                isPresent = true;
            }
        }
        if (isPresent) {
            this.listOfParticipants.splice(participantIndex, 1);
            return `The ${name} removed successfully.`;
        } else {
            try {
                throw new Error(`The ${name} is not registered in the camp.`);
            } catch (ex) {
                return `Uncaught Error: ${ex.message}`;
            }
        }
    }

    timeToPlay(typeOfGame, ...participants) {
        if (typeOfGame == 'WaterBalloonFights') {
            let p1 = participants[0];
            let p2 = participants[1];
            
            if (!this.playerPresent(p1) || !this.playerPresent(p2)) {
                try {
                    throw new Error('Invalid entered name/s.');
                } catch (ex) {
                    return `Uncaught Error: ${ex.message}`;
                }
            } else {
                p1 = this.getPlayerByName(p1);
                p2 = this.getPlayerByName(p2);
                if (p1.condition != p2.condition) {
                    try {
                        throw new Error("Choose players with equal condition.");
                    } catch (ex) {
                        return `Uncaught Error: ${ex.message}`;
                    }
                } else if (p1.power > p2.power) {
                    p1.wins ++;
                    return `The ${p1.name} is winner in the game ${typeOfGame}.`;
                } else if (p1.power < p2.power) {
                    p2.wins ++;
                    return `The ${p2.name} is winner in the game ${typeOfGame}.`;
                } else {
                    return 'There is no winner.';
                }
            }

        } else {
            let p = participants[0];
            if (!this.playerPresent(p)) {
                try {
                    throw new Error('Invalid entered name/s.');
                } catch (ex) {
                    return `Uncaught Error: ${ex.message}`;
                }
            } else {
                p = this.getPlayerByName(p);
                p.power += 20;
                return `The ${p.name} successfully completed the game ${typeOfGame}.`;
            }
        }
    }

    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        for (let p of this.listOfParticipants) {
            result += `\n${p.name} - ${p.condition} - ${p.power} - ${p.wins}`;
        }
        return result;
    }
}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());