1. Написать функцию заполнения массива. Имя произвольное.

function createArr (n, m) {
  let array = new Array(n);
  for ( i = 0; i < array.length; i++ ) {
      array[i] = (Math.round( Math.random() * m));
  }
  return array;
}


2. написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.

let arr1 = [1,2,3,'f','v'];
let arr2 = [5,6,'f',4,2,7];

function compare(arr1, arr2) {
    let first = arr1.filter(el => !isNaN(el)).reduce((a, b) => a + b);
    let second = arr2.filter(el => !isNaN(el)).reduce((a, b) => a + b);
    return first > second ? arr1 : arr2;
}


3. Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной знак может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной znak.

function doMath(x, znak, y) {
    if(znak === '+') return x + y;
    if(znak === '-') return x - y;
    if(znak === '*') return x * y;
    if(znak === '/') return x / y;
    if(znak === '%') return x % y;
    let result = x;
    if(znak === '^') { 
        for (i = 1; i < y; i++) {
           result *= x;
        }
           return result;
    }
}


4. Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.

'func("hello world", ['l', 'd'])' вернет нам "heo wor".

function filterCharacters (stringWord, array) {
    return stringWord.split('').filter(el => array.indexOf(el) < 0); 
}


5. напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.

let input = [1, 2, 3, 4, 5, 6];
let isEven = x => x.filter(el => el % 2 === 0); // проверяет на четность
let filter = (array, func) => func(array);

filter(input, isEven);
