const inquirer = require('inquirer');
const SVG = require('./svg.js');
const colors = require('./colors.js');
const {Circle, Triangle, Square} = require('./shapes.js');
const { writeFile } = require("fs/promises");


const keyValidate = (input) => {
    let inputLowercase = input.toLowerCase();
    for (var i = 0, len = colors.length; i < len; ++i) {
        if (inputLowercase.indexOf(colors[i]) != -1) {
        return true;
    }}
    return console.log("\n Please enter a valid color keyword")
}

const hexValidate = (input) => {
    const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!input.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal code")
            }
            return true;
}


class Questions {
    

    run() {

        return inquirer.prompt(
            [
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Which shape would you like for your logo?',
                    choices: ['Circle', 'Square', 'Triangle'],
                },
            
                {
                    type: 'list',
                    name: 'shapeColorFormat',
                    message: 'Would you like to provide a color keyword or hexidecimal for your shape color?',
                    choices: ['color keyword', 'hexadecimal']
                },
                
                {
                    type: "input",
                    name: "shapeColor",
                    message: "Please enter the color keyword for your shape: ",
                    when: (answers) => {
                        if(answers.shapeColorFormat === 'color keyword') {
                            return true;
                        }
                        return false;
                    },
                    validate: shapeColor => keyValidate(shapeColor)
                },
                
                {
                    type: "input",
                    name: "shapeColor",
                    message: "Please enter the hexadecimal code for your shape (#000000): ",
                    when: (answers) => {
                        if(answers.shapeColorFormat === 'hexadecimal') {
                            return true;
                        }
                        return false;
                    },
                    validate: shapeColor => hexValidate(shapeColor)
                },
            
                {
                    type: 'input',
                    name: 'text',
                    message: 'What text would you like to include in your logo? (MAX 3 characters)',
                    validate: (answer) => {
                        if (answer.length > 3) {
                            return console.log("\n Please enter 3 characters or less");
                        }
                        return true;
                    }
                },
            
                {
                    type: 'list',
                    name: 'textColorFormat',
                    message: 'Would you like to provide a color keyword or hexidecimal for your text color?',
                    choices: ['color keyword', 'hexadecimal']
                },
                
                {
                    type: "input",
                    name: "textColor",
                    message: "Please enter the color keyword for your text: ",
                    when: (answers) => {
                        if(answers.textColorFormat === 'color keyword') {
                            return true;
                        }
                        return false;
                    },
                    validate: textColor => keyValidate(textColor)
                },
            
                {
                    type: "input",
                    name: "textColor",
                    message: "Please enter the hexadecimal code for your text (#000000): ",
                    when: (answers) => {
                        if(answers.textColorFormat === 'hexadecimal') {
                            return true;
                        }
                        return false;
                    },
                    validate: textColor => hexValidate(textColor)
                },
            ]
        )

        .then (({shape, shapeColor, text, textColor}) => {
            let shapeType;
            switch(shape){
                case 'Circle':
                    shapeType = new Circle();
                    break;
                case 'Triangle':
                    shapeType = new Triangle();
                    break;
                default:
                    shapeType = new Square();
                    break;
            }
            shapeType.setColor(shapeColor);
            const svg = new SVG();
            svg.setText(text,textColor);
            svg.setShape(shapeType);
            return writeFile('./examples/logo.svg', svg.render());
        })

        .then(() => {
            console.log('Generated logo.svg in the examples folder!')
        })

        .catch(err => {
            console.log(err)
        });

    }
}
    

module.exports = Questions;