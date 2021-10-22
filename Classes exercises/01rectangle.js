class Rectangle {
    constructor(w, h, c) {
        this.width = w;
        this.height = h;
        this.color = c;
    }
    calcArea() {
        return this.height * this.width;
    }
}
let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());