//const readline = require('readline-sync') //https://www.npmjs.com/package/readline-sync

function generateMatrix(rows, columns) { //n = row, m = column
    const matrix = [];
    let i = 0;

    while(i < rows) {
        let j = 0;
        const row = [];
        while(j < columns) {
            row.push(Math.floor(Math.random() * 100));
            j++;
        }
        matrix.push(row);
        i++;
    }
    return matrix;
}

console.log(generateMatrix(5, 6));
