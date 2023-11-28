const {Circle, Triangle, Square} = require('../shapes.js');
const SVG = require('../svg.js')

// testing each class to ensure the color and text properties are being applied correctly
describe('Circle class', () => {
    it('should set the shape color properly', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    })
    it('should set the text and text color properly', () => {
        const content = new SVG();
        content.setText('BOB', 'white')
        expect(content.render()).toEqual('<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><text x="150" y="125" font-size="40" text-anchor="middle" fill="white">BOB</text></svg>');
    })
})

describe('Triangle class', () => {
    it('should set the shape color properly', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })   
    it('should set the text and text color properly', () => {
        const content = new SVG();
        content.setText('JOE', 'pink')
        expect(content.render()).toEqual('<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><text x="150" y="125" font-size="40" text-anchor="middle" fill="pink">JOE</text></svg>');
    })
})

describe('Square class', () => {
    it('should set the shape color properly', () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="purple" />');
    })   
    it('should set the text and text color properly', () => {
        const content = new SVG();
        content.setText('JIM', 'grey')
        expect(content.render()).toEqual('<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><text x="150" y="125" font-size="40" text-anchor="middle" fill="grey">JIM</text></svg>');
    })
})