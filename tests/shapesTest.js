const {Circle, Triangle, Square} = require('../lib/shapes.js');

describe('Circle class', () => {
    it('making sure the color is set properly', () => {
        const color = 'aqua';
        const circle = new Circle(color);
        expect(circle.color).toEqual('aqua');
    })
})