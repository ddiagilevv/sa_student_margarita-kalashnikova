const data = [1, 2, 3, 4, 5];

function calcAvg(data) {
    const sum = data.reduce((sum, value) => {
    return sum + value;
}, 0);

const mean = sum / data.length

console.log("среднее арифметическое:", mean);
}

function getRandomNumbers(oldArray) {
    const min = 1;
    const max = 100;

    // data.forEach((element) => element = Math.floor(Math.random() * (max - min + 1)) + min);
    // return data;

    const newArray = [];
    oldArray.forEach((element) => newArray.push(Math.floor(Math.random() * (max - min + 1)) + min));
    console.log(newArray);
    return newArray;
}

const data2 = getRandomNumbers(data);
calcAvg(data2);