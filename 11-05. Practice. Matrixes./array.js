let cosmetics = ['lipsticks', 'mascara', 'foundation', 'lipgloss', 'styler'];

console.log(cosmetics);

let i = 0;
while(i < cosmetics.length) {
    console.log('Индекс:' + i + ' косметос:' + cosmetics[i]);
    i++;
}

console.log('------------------------------');

let sephora = ['dior', 'gucci', 'maybelinne', 'maxfactor', 'l\'oreal'];
let aversi = ['pills', 'creams', 'condoms', 'eyedrops', 'nasalspray'];
let carrefour = ['bread', 'butter', 'coke-zero', 'fruit', 'dairy'];
let alcorium = ['wine', 'beer', 'gin', 'tequila', 'vodka'];

let shoppingMall = [
    cosmetics,
    sephora,
    aversi,
    carrefour,
    alcorium
];

//console.log(shoppingMall);
//apteka = shoppingMall[2];
console.log(shoppingMall[2][2]);

console.log('------------------------------');

let currentRow = 2;
let currentColumn = 1;

let aversiLength = shoppingMall[currentRow].length;
console.log(aversiLength);

console.log('------------------------------');

while (currentColumn < shoppingMall[currentRow].length - 1){
    console.log(shoppingMall[currentRow][currentColumn]);
    currentColumn++;
}
