// overall Shape class
class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

// add circle to shape class and tell it what to render
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// add triangle to shape class and tell it what to render
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// add square to shape class and tell it what to render
class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

// export circle, triangle and square as an object
module.exports = {Circle, Triangle, Square};