//Обход матрицы змейкой циклами 1) for, 2) while, 3) do/while
//Обход должен быть горизонтальный/вертикальный; инверсированный-горизоньальный/инв.-вертикальный (12 функций)

class Snake {
    constructor() {
        
    }

    traverse(matrix, cycleType, orientationType, isInverted ) {
        function forHorizontal(matrix) {
            const output = [];
            for (let row = 0; row < matrix.length; row++ ) {
                if (row % 2 === 0) { //четная строка ('четная' - потому что отсчет с 0)
                    for (let column = 0; column < matrix[row].length; column++) {
                        output.push(matrix[row][column]);
                    }
                } else {
                    for (let column = matrix[row].length - 1; column >= 0; column--) {
                        output.push(matrix[row][column]);
                    }
                }
            }
            return output;
        }

        function forHorizontalInverted(matrix) {
            const output = [];
            for (let row = 0; row < matrix.length; row++ ) {
                if (row % 2 === 0) { //четная строка ('четная' - потому что отсчет с 0)
                    for (let column = 0; column < matrix[row].length; column++) {
                        output.push(matrix[row][column]);
                    }
                } else {
                    for (let column = matrix[row].length - 1; column >= 0; column--) {
                        output.push(matrix[row][column]);
                    }
                }
            }
            return output;
    }
}
}