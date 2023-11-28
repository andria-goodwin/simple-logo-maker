class Shape {
    constructor(color = '', text = '', textColor = '') {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    // setColor(color) {
    //     this.color = color;
    // }
    render() {
        throw new Error('Child must have render method override');
    }
}

class Circle extends Shape {
    constructor(color = '', text = '', textColor = '') {
        super(color, text, textColor);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor(color = '', text = '', textColor = '') {
        super(color, text, textColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor(color = '', text = '', textColor = '') {
        super(color, text, textColor);
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

module.exports = {Circle, Triangle, Square};