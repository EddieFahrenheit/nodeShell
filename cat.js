const fs = require('fs');

module.exports = function(input) {
    fs.readFile(input, (err, data) => {
        if (err) throw err;
        process.stdout.write(data);
    });
}