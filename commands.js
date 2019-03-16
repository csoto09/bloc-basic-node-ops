const fs = require('fs');

function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}
function evaluateCmd(userInput) {
    const userInputArray = userInput.split(' ');
    command = userInputArray[0];
    switch (command) {
        case "echo":
            commandLibrary.echo(userInputArray.slice(1).join(" "));
            break;
        case "cat":
            commandLibrary.cat(userInputArray.slice(1));
            break;
        case "head":
            commandLibrary.head(userInputArray.slice(1));
            break;
        case "tail":
            commandLibrary.tail(userInputArray.slice(1));
            break;
        default:
            done('Command not found')
    }
}




const commandLibrary = {
    "echo": function(userInput) {
        done(userInput);
    },
    "cat": function(fullPath) {
        const fileName = fullPath[0];
        fs.readFile(fileName, (err, data) => {
            if (err) throw err;
            done(data);
        });
    },





// For head and tail functions, n = 10.
// For head and tail functions, n = 10.
    "head": function(fullPath) {
        const fileName = fullPath[0];
        fs.readFile(fileName, 'utf8',(err, data) => {
            if (err) throw err;
            done(data.split('\n').slice(0,10).join('\n'));
        });
    },
    "tail": function(fullPath) {
        const fileName = fullPath[0];
        fs.readFile(fileName, 'utf8',(err, data) => {
            if (err) throw err;
            done(data.split('\n').slice(-10).join('\n'));
        });
    }
};
module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;