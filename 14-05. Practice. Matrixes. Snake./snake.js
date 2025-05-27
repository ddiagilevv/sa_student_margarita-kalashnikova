//Обход матрицы змейкой циклами 1) for, 2) while, 3) do/while
//Обход должен быть горизонтальный/вертикальный; инверсированный-горизоньальный/инв.-вертикальный (12 функций)

class Snake {
    constructor() {
        
    }

    traverse(matrix, cycleType, orientationType, isInverted) {
        function selection1(matrix, cycleType, orientationType, isInverted) {
            //cycleType - string;
            //orientationType - string;
            //isInverted - boolean;
            switch(cycleType) {
                case 'for':
                    switch(orientationType) {
                        case 'horizontal':
                            return isInverted ? forHorizontalInverted(matrix) : forHorizontal(matrix); //NB!использовать тернарный оператор
                        break;
                        case 'vertical':
                            return isInverted ? forVerticalInverted(matrix) : forVertical(matrix);
                        break;
                    }
                    break;
                case 'while':
                    switch(orientationType) {
                        case 'horizontal':
                            return isInverted ? whileHorizontalInverted(matrix) : whileHorizontal(matrix);
                        break;
                        case 'vertical':
                            return isInverted ? whileVerticalInverted(matrix) : whileVertical(matrix);
                        break;
                    }
                    //to do
                    break;
                case 'do-while':
                    switch(orientationType) {
                        case 'horizontal':
                            return isInverted ? doWhileHorizontalInverted(matrix) : doWhileHorizontal(matrix);
                        break;
                        case 'vertical':
                            return isInverted ? doWhileVerticalInverted(matrix) : doWhileVertical(matrix);

                    }
                    //to do
                    break;                

            }
        }
        console.log(selection1(matrix, cycleType, orientationType, isInverted));

        function selection2() {
            //to do - реализовать без использования switch, через словарь стратегий 
        }

        function forHorizontal(matrix) {
            console.log(`forHorizontal`);
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
            console.log(`forHorizontalInverted`);
            const output = [];
            for (let row = matrix.length -1; row >= 0; row-- ) {
                if (row % 2 === 0) { //четная строка ('четная' - потому что отсчет с 0)
                    for (let column = matrix[row].length - 1; column >= 0; column--) {
                        output.push(matrix[row][column]);
                    }
                } else {
                    for (let column = 0; column < matrix[row].length; column++) {
                        output.push(matrix[row][column]);
                    }
                }
            }
            return output;
        }

        function whileHorizontal(matrix) {
            console.log(`whileHorizontal`);
            const output = [];
            let row = 0;
            while (row < matrix.length) {
                if (row % 2 === 0) { //четная строка ('четная' - потому что отсчет с 0)
                    let column = 0;
                    while (column < matrix[row].length) {
                        output.push(matrix[row][column]);
                        column++;
                    }
                } else {
                    let column = matrix[row].length - 1;
                    while (column >= 0) {
                        output.push(matrix[row][column]);
                        column--;
                    }
                }
                row++;
            } 
            return output;
        }

        function whileHorizontalInverted(matrix) {
            console.log(`whileHorizontalInverted`);
            const output = [];
            let row = matrix.length - 1;
            while (row >= 0) {
                if (row % 2 === 0) { //четная строка ('четная' - потому что отсчет с 0)
                    let column = matrix[row].length - 1;
                    while (column >= 0) {
                        output.push(matrix[row][column]);
                        column--;
                    }
                } else {
                    let column = 0;
                    while (column < matrix[row].length) {
                        output.push(matrix[row][column]);
                        column++;
                    }
                }
                row--;
            }
            return output;
        }

        function doWhileHorizontal(matrix) {
            console.log(`doWhileHorizontal`);            
            const output = [];
            let row = 0;
            do {
                if (row % 2 === 0) { //четная строка ('четная' - потому что отсчет с 0)
                    let column = 0;
                    if (matrix[row].length > 0) {
                        do {
                            output.push(matrix[row][column]);
                            column++;
                        } while (column < matrix[row].length);
                    }                    
                } else {
                    let column = matrix[row].length - 1;
                    if (matrix[row].length > 0) {
                        do {
                            output.push(matrix[row][column]);
                            column--;
                        } while (column >= 0);
                    }
                }
                row++;
            } while (row < matrix.length);
            return output;
        }

        function doWhileHorizontalInverted(matrix) {
            console.log(`doWhileHorizontalInverted`);            
            const output = [];
            let row = matrix.length - 1;
            do {
                if (row % 2 === 0) { //четная строка ('четная' - потому что отсчет с 0)
                    let column = matrix[row].length - 1;
                    if (matrix[row].length > 0) {
                        do {
                            output.push(matrix[row][column]);
                            column--;
                        } while (column >= 0);                      
                    }
                } else {
                    let column = 0;
                    if (matrix[row].length > 0) {
                        do {
                            output.push(matrix[row][column]);
                            column++;
                        } while (column < matrix[row].length);
                    }
                }
                row--;
            } while (row >= 0);
            return output;
        }


        function forVertical(matrix) {
            console.log(`forVertical`);
            const output = [];
            const rows = matrix.length;
            const columns = matrix[0].length;
            for (let column = 0; column < columns; column++) {
                if (column % 2 === 0) { //четная строка ('четная' - потому что отсчет с 0)
                    for (let row = 0; row < rows; row++) {
                        output.push(matrix[row][column]);
                    }
                } else {
                    for (let row = rows - 1; row >= 0; row--) {
                        output.push(matrix[row][column]);
                    }
                }
            }
            return output;
        }

        function forVerticalInverted(matrix) { 
            console.log(`forVerticalInverted`);
            const output = [];
            const rows = matrix.length;
            const columns = matrix[0].length;
            for (let column = columns - 1; column >= 0; column--) {
                if (column % 2 === 0) { //четная строка ('четная' - потому что отсчет с 0)
                    for (let row = rows - 1; row >= 0; row--) {
                        output.push(matrix[row][column]);
                    }
                } else {
                    for (let row = 0; row < rows; row++) {
                        output.push(matrix[row][column]);
                    }
                }
            }
            return output;
        }

        function whileVertical(matrix) {
            console.log(`whileVertical`);
            const output = [];
            const rows = matrix.length;
            const columns = matrix[0].length;
            let column = 0;
            while(column < columns) {
                if (column % 2 === 0) {
                    let row = 0;
                    while(row < rows) {
                        output.push(matrix[row][column]);
                        row++;
                    }
                } else {
                    let row = rows - 1;
                    while(row >= 0) {
                        output.push(matrix[row][column]);
                        row--;
                    }
                }
                column++;
            }
            return output;
        }

        function whileVerticalInverted(matrix) {
            console.log(`whileVerticalInverted`);
            const output = [];
            const rows = matrix.length;
            const columns = matrix[0].length;
            let column = columns - 1;
            while(column >= 0) {
                if (column % 2 === 0) {
                    let row = rows - 1;
                    while(row >= 0) {
                        output.push(matrix[row][column]);
                        row--;
                    }
                } else {
                    let row = 0;
                    while(row < rows) {
                        output.push(matrix[row][column]);
                        row++;
                    }
                }
                column--;
            }
            return output;
        }

        function doWhileVertical(matrix) {
            console.log(`whileVertical`);
            const output = [];
            const rows = matrix.length;
            const columns = matrix[0].length;
            let column = 0;
            do {
                if (column % 2 === 0) {
                    let row = 0;
                    do {
                        output.push(matrix[row][column]);
                        row++;
                    } while(row < rows);
                } else {
                    let row = rows - 1;
                    do {
                        output.push(matrix[row][column]);
                        row--;
                    } while(row >= 0);
                } 
                column++;
            } while(column < columns);
            return output;
        }

        function doWhileVerticalInverted(matrix) {
            console.log(`whileVerticalInverted`);
            const output = [];
            const rows = matrix.length;
            const columns = matrix[0].length;
            let column = columns - 1;
           do {
                if (column % 2 === 0) {
                    let row = rows - 1;
                    do {
                        output.push(matrix[row][column]);
                        row--;
                    } while(row >= 0);
                } else {
                    let row = 0;
                    do {
                        output.push(matrix[row][column]);
                        row++;
                    } while(row < rows);
                }
                column--;
            } while(column >= 0);
            return output;
        }
}
}

let snake01 = new Snake();
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
snake01.traverse(matrix, 'do-while', 'vertical', false);