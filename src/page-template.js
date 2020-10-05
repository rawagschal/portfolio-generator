//interpolate the text in the HTML string using vairables passed into the function
const generatePage = (name, github) => {
    //interpolate command-line arguments into the HTML
    return `
        <!DOCTYPE hmtl>
        <html lang="eng">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width-device-width, initial scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie-edge">
            <title> Portfolio Demo</title>
        </head>
        
        <body>
            <h1>${name}</h1>
            <h2><a href="https://github.com/${github}">Github</a></h2>
        </body>
        </html>
    `;
}

//make the functions available to other files
module.exports = generatePage;