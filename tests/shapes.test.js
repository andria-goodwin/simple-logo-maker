const {Circle, Triangle, Square} = require('../lib/shapes.js');

describe('Circle class', () => {
    it('should set the shape color properly', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    })
})

describe('Triangle class', () => {
    it('should set the shape color properly', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })   
})

describe('Square class', () => {
    it('should set the shape color properly', () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="purple" />');
    })   
})