1. Заполнить массив А случайными числами (диазпазон на ваше усмотрение). Заменить каждый элемент массива с нечетным индексом на ноль.

let arr = new Array(40);

for ( i = 0; i < arr.length; i++ ) {
    arr[i] = (Math.round( Math.random() * 50 ));
    if (i % 2 !== 0 ) arr[i] = 0;
}

2. Заполнить массив размерностью n значениями с клавиатуры. Если введенное значение пользователя не число, или отрицательное значение, то запросить повторный ввод данных.

let arr = new Array(5);

for ( i = 0; i < arr.length; i++ ) {
    arr[i] = +prompt('enter a digit');
    if (arr[i] < 0 || isNaN(arr[i])){
    i--;
    }
}

3. Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
Найти максимальное число и минимальное число.
let A = new Array(40);
let B = [];

let min = 50;
let max = 0;
for ( i = 0; i < A.length; i++ ) {
    A[i] = (Math.round( Math.random() * 50 ));

    if (min > A[i]) min = A[i];
    if (max < A[i]) max = A[i];
}
console.log(min, max);

for ( i = 0; i < A.length; i++ ) {
    if (A[i] < min && A[i] > max) B[i] = A[i];
}
