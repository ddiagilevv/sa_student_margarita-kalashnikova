# Статистика. Показатели центральных тенденций. Основы мат статистики в JS

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

Медиана - значенипе , разделяющеее упорядоченный набор данных, на две равные части.
Половина наблюдений будет <= медиане, вторая половина >= медиане.

пусть X = {x_1, x_2, ... x_n} | x_1 <= x_2 <= ... <= x_n
пусть выборка числовых данных, упорядоченная по возрастанию

медиана m определяется как
{
    если n - нечетное, то
        m = x_(k) | k = (n+1)/2
    если n - четное, то
        m = ( x_(n/2) + x_(n / (2+1) ) ) / 2
}

Медиана это точка баланса не по весу а по количеству.
Например, если построить людей по росту то медиана это человек стоящий посередине

примеры использования
    1) доходы населения
    пример:
    имеем 7 чел с указанными ниже доходами (в тыс. руб.)
    [25, 30, 32, 34, 36, 38, 300]
    среднее = СУММА(25, 30, 32, 34, 36, 38, 300) / КОЛИЧЕСТВО = 495 / 7 = 70,7 (создает ошибочное представление о доходах населения)
    медиана = 34 
    
    2)время ответа системы
    пример:
    система дает ответ, замеремя время ответа системы в мс
    [100, 105, 110, 95, 5000]
    среднее = 1082 мс
    медиана 105 мс

    медиана полезна когда нас интересуют "Типичные представители" чего-либо, когда есть выбросы(напр. 5000 в примере с системой или напр. 300 в примере с доходами населения)

    Однако лучше использовать среднее, если выборка приближена к Гауссовому распределению
    
```js
function median(array){
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

    const mid = Math.floor(sorted.length / 2); // округление вниз до ближ. целого

    // если нечетная длина массива:
    if (sorted.length % 2 !== 0) {
        return sorted[mid];
    } else { 
        // если четная:
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
}

const data = [1, 99, 85, 3, 4566, 54, 781, 12, 0, 1];
console.log(`Данные: ${data}`);
console.log(`медиана=${median(data)}`);
```

## 7. forEach
> The forEach() method of Array instances executes a provided function once for each array element.

```js
    const array = ["a", "b", "c"];

    array.forEach((element) => console.log(element));

    // Expected output: "a"
    // Expected output: "b"
    // Expected output: "c"
```

## 8. Object.keys(...) и Object.values()
> The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
```js
const object1 = {
  a: "some string",
  b: 42,
  c: false,
};

console.log(Object.(object1));
// Expected output: Array ["a", "b", "c"]
```

> The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
```js
const object1 = {
  a: "some string",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["some string", 42, false]
```

## 9. Деструктуризация и spread
> Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.

    Оператор «spread»
    Если мы хотим получить и последующие значения массива, но не уверены в их числе – можно добавить ещё один параметр, который получит «всё остальное», при помощи оператора "..." («spread», троеточие):

    ```js
    let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

    console.log(firstName); // Юлий
    console.log(lastName);  // Цезарь
    console.log(rest);      // Император,Рима (массив из 2х элементов)
    ```
        

## 9. Мода 

Мода - наиболее часто встречающееся значение.

пример:
1)
    [1, 2, 2, 3, 4]
    Мода = 2 (Унимодальное распределение)

2)
    [1, 5, 5, 6, 6, 7]
    У выборки две моды. (Бимодальное распределение)

3)
    [1, 2, 3, 4, 5]
    У выборки нет моды (Амодальное распределение)

4)
    [1, 1, 2, 2, 3, 4, 5, 5, 5, 5]
    Моды: 1, 2, 5 (Мультимодальное распределение)

мода нужна 
- при работе с категориальными данными
- требуется узнать наиболее популярное значение
    например стат. опрос "Какой ваш любимы цвет?", "Кто платит на свидании?"
- анализ распределения
- требуется устойчивость к выбросам


```js
function mode(array) {
    const counts = {}; // ОБЪЕКТ(это НЕ масиив!!!!!) для подсчета количеств каждого числа

    array.forEach( element => {
        // если число уже есть - увеличиваем счетчик
        // если нет - начинаем с 1
        counts[element] = (counts[element] || 0) + 1 // TODO РАССКАЗАТЬ КАК РАБОТАЕТ ПОДРОБНО + ПРО ПЕРЕБОР ЗНАЧЕНИЕ В ОБЪЕКТЕ!!!!!!!!!!!!!!!!!!!!!!!!!

        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // !!!!!!!!!!!! ALARM !!!!!!!!!!!!!!!!!!!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        const maxCount = Math.max(...Object.values(counts))
    }

    )



}

```

ДЗ 9.06 DEADLINE 13.06
1) создать папку "HW-9_06_Stat"
2) создать внутри по папке на КАЖДУЮ тему (выше)
    - папка "метод reduce"
    - папка "среднее арифметическое"
    ... и тд
3) в каждой папке, создать .js файлы и вставить туда примеры. все примеры запустить несколько раз с разными параметрами
    Например, const data = [1, 2, 3, 4, 5];. Запустить сначала as is
    потом заполнить data случайными числами (написать функцию getRandomNumbers(...) которая ретёрнит готовый массив)
4) Задать мне МИНИМУМ 1 вопрос
5) перейти по всем ссылкам на документацию, запустить все примеры оттуда, перенести себе в папку.
все должно быть структурированно и разбито по папкам и файлам.
    
