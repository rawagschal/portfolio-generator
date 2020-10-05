
const inquirer = require('inquirer');

//use the inquirer.prompt method to access the 
//question object, which is an array of more objects)
inquirer
    .prompt ([
       {
           type: 'input',
           name: 'name',
           message: 'What is your name?'
       } 
    ])
    //answer object is returned as a Promise
    .then(answers => console.log(answers));
// //use built-in node.js function require() to include core fs module
// const fs = require('fs');
// //require the generatePage module after exporting in page-template.js
// const generatePage = require('./src/page-template');

// // creates an array to hold user command-line arguments
// const pageHTML = generatePage(name, github);


// //asynchronous functions allow the computer to run the process in the background,
// //freeing up resources w/out halting runtime
// fs.writeFile('./index.html', pageHTML, err => {
//    //callback to check if error exists, creating an exception
//    //and thus stopping the code execution
//     if (err) throw (err);
//     //will concatenate the 'name' and 'message' text properties of the Error object
//     //good to know for retreiving Error properties in development

//     //direct user to inspect newly created file
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

