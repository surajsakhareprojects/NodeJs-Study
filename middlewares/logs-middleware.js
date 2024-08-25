const fs = require('fs');

function logResponse(fileName) {
    return ( (req, res, next)=>{
        fs.appendFile(fileName, `\n Date and Time: ${ new Date() },  Path: ${ req.path }, Method: ${ req.method } `, 
            (error, data)=>{
                next();
            }
        )
    });
}

module.exports = {
    logResponse
}


