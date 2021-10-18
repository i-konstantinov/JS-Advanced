const params = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`;

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

/**
 * 
 * @param {function} area 
 * @param {function} vol 
 * @param {string} input 
 */

function solve(area, vol, input) {
    // const figures = JSON.parse(input);
    // const result = [];

    return JSON.parse(input).map(fig => ({
        area: area.apply(fig),
        volume: vol.apply(fig),
    }));

    // same as '.map()':
    // for (let fig of figures) {
    //     const figureArea = area.apply(fig);
    //     const figureVol = vol.apply(fig);

    //     result.push({
    //         area: figureArea,
    //         volume: figureVol,
    //     })
    // }  
    // return result;
};

console.log(solve(area, vol, params))
