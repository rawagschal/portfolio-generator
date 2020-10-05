//use built-in node.js function require() to include core fs module
const fs = require('fs');
//require the generatePage module after exporting in page-template.js
const generatePage = require('./src/page-template.js');

// creates an array to hold user command-line arguments
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs

//asynchronous function's allow the computer to run the process in the background,
//freeing up resources w/out halting runtime
fs.writeFile('./index.html', generatePage(name, github), err => {
   //callback to check if error exists, creating an exception
   //and thus stopping the code execution
    if (err) throw new Error(err);
    //will concatenate the 'name' and 'message' text properties of the Error object
    //good to know for retreiving Error properties in development

    //direct user to inspect newly created file
    console.log('Portfolio complete! Check out index.html to see the output!');
});



// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // this...
//     for (let i = 0; i < profileDataArr.length; i+= 1){
//         console.log(profileDataArr[i]);
//     }
//     console.log('=========');

//     //is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
