1. Заполнить массив А случайными числами (диазпазон на ваше усмотрение). Заменить каждый элемент массива с нечетным индексом на ноль.

let arr = new Array(40);

for ( i = 0; i < arr.length; i++ ) {
    arr[i] = (Math.round( Math.random() * 50 ));
    if(i % 2 !== 0 ) {
        arr[i] = 0;
    }
}

2. Заполнить массив размерностью n значениями с клавиатуры. Если введенное значение пользователя не число, или отрицательное значение, то запросить повторный ввод данных.

let arr = new Array(5);

for ( i = 0; i < arr.length; i++ ) {
    let test = prompt('enter a digit');
    if (test > 0 && !isNaN(test)) arr[i] = test;
else {
        test = prompt('enter a digit again');
        if (test > 0 && !isNaN(test)) arr[i] = test;
        i--;    
    }
}

3. Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
Найти максимальное число и минимальное число.
let A = new Array(40);

let min = A[0];
let max = A[0];
for ( i = 0; i < A.length; i++ ) {
    arr[i] = (Math.round( Math.random() * 50 ));
    if(min > A[i]) min = A[i];
    if(max < A[i]) max = A[i];
}

console.log(min, max);