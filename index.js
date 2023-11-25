const inquirer = require('inquirer');
// const fs = require('fs');
const questions = require('./lib/questions.js');
// const fileName = "./new/logo.svg";

function init() {
    console.log('Welcome to the simple logo maker!')
    inquirer 
    .prompt(questions)
    .catch(err => {
            console.log(err)
        });
}

init();