Статистика

## 1. метод reduce
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
reduce((accumulator, currentValue, index, array) => {
    //тело функции
    }, initialValue);
    accumulator - накопитель, с охраняет промежуточный результат.
    currentValue
    index - (опционально) - текущий индекс
    array - (опционально)
    initialValue - начальное значение аккумулятора
    
пример1. Сумма всех чисел.
```js
const data = [1, 2, 3, 4, 5];
const sum = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
```
пример2. Сумма всех чисел.
```js
[10, 20, 30].reduce((sum, val) => sum + val, 0);
// 1) sum = 0 + 10 = 10
// 2) sum = 10 + 20 = 30
// 3) sum = 30 + 30 = 60

```

шаг accumulator currentValue сумма
1   0           1            0 + 1 = 1
2   1           2            1 + 2 = 3
...
5   10          5            10 + 5 = 15



##  2. Среднее Арифметическое
```js
const data = [1, 2, 3, 4, 5];
// "сворачиваем" массив в одно значение при помощи метода reduce
// reduce принимает:
//   функцию и начальное значение (например, accumulator = 0 на 1м шаге в примере выше)
// функция идет по всем элементам массива и накапливает сумму: sum + value 
const sum = data.reduce((sum, value) => {
    return sum + value; // суммируем значения
}, 0); // начинаем с нуля

const mean = sum / data.length

console.log("среднее арифметическое:", mean);
```

## 3. Метод sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://www.codingdefined.com/2017/04/mutating-and-non-mutating-javascript.html

метод sort изменяет оригинальый массив. чтобы не менять исходные данные, используем метод slice, который создает копию массива

## 4. Метод slice
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
SYNTAX:
- slice() // просто создать копию ориг массива
- slice(start) // пишем все элементы до последнего, начиная с элемента с индексом start
    ```js
    const animals = ["ant", "bison", "camel", "duck", "elephant"];
    console.log(animals.slice(2));
    // Expected output: Array ["camel", "duck", "elephant"]
    ```
- slice(start, end)

    ```js
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    //пример 1:
    console.log(animals.slice(1, 50));
    // Expected output: Array ["bison", "camel", "duck", "elephant"]

    //пример 2:
    console.log(animals.slice(2, 50));
    // Expected output: Array ["camel", "duck", "elephant"]

    //пример 3:
    console.log(animals.slice(2, -1));
    // Expected output: Array ["camel", "duck"]

    //пример 4:
    console.log(animals.slice(1, -3));
    // Expected output: Array ["bison"]


    const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    console.log(abc.slice(6, -5));
    // Expected output: Array ["G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"]
    ```



Его испольхуем для получения части массива, не изменяя оригинал.
```js
const arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3); // 2(arr[1]), 3(arr[2])
```

## 5. Math.floor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
```
console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6
```

## 6. Медиана
```js
function(array){
    const sorted = array.slice().sort((a, b) => a - b);
        // .sort по умолч. сортирует массив как строки
        // поэтому используем ф-цию сравнения a - b - сортировка по числам
            // Функция сравнения. Почему a - b?
                // (a, b) => a - b - возвращает отрицательное число -> a будет находиться перед b
                // (a, b) => a - b - возвращает положительное число -> b будет находиться перед a
                // (a, b) => a - b - возвращает 0 -> a = b -> порядок не меняется

                // пример:
                // [99, 9, 1]
                // 1)
                // a = 99, b = 9
                // 99 - 9 = 90 -> 90 > 0 -> b(=9) ставим перед a(=99)
                // 2)
                // a = 9, b = 1
                

```