const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err.message);
        return;
    }
    const lines = data.split('\n').length;
    const words = data.split(/\s+/).filter(word => word.length > 0).length;
    const result = `Total Lines: ${lines}\nTotal Words: ${words}`;
    fs.writeFile('output.txt', result, (err) => {
        if (err) {
            console.log("Error writing file:", err.message);
            return;
        }

        console.log("Result written to output.txt");
    });
});