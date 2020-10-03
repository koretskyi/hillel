// 1. В одномерном массиве произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// // 5 элемент поменять с 6 и тд Если массив непарный - последний элемент не трогать.

let arr = [1, 2, 3, 4, 5];
let arrRes = new Array(arr.length);

for ( i = 1; i <= arr.length; i = i + 2 ) {
    if(arr[i] === undefined) {
    	arrRes[i - 1] = arr[i - 1];
    	break;
    }

    arrRes[i - 1] = arr[i];
    arrRes[i] = arr[i - 1];
}

console.log(arrRes);

let arr = new Array(10);
let sum = 0;
for ( i = 0; i < arr.length; i++ ) {
	//debugger;
    arr[i] = new Array(5);
    for ( j = 0; j < arr[i].length; j++ ) {
    	arr[i][j]  = (Math.round( Math.random() * 10 ));

    	//sum += arr[i];
	}
}
console.log(arr);

// 2. В двумерном массиве A размером n на m. Заполнить случайными числами.
// Найти ряд, где сумма элементов наименьшая
// Найти ряд, где сумма элементов найбольшая
// Поменять ряды местами (1 и 2 пункт)

//В двумерном массиве arr1 размером n на m. Заполнить случайными числами.

let m = 3;
let n = 5;
let arr1 = new Array(m);

for ( i = 0; i < m; i++ ) {
		arr1[i] = new Array(n);
	for ( j = 0; j < n; j++ ) {
		arr1[i][j] = (Math.round( Math.random() * 50 ));	
	}
}

let sum = 0;
let sumMax = 0;
let sumMin = 0;
let counterRowMax = 0;
let counterRowMin = 0;

for ( i = 0; i < arr1.length; i++ ) {

// Finding the sum of elements in the sub array;
	for ( k = 0; k < arr1[i].length; k++ ) {
    	sum += arr1[i][k];
	}

// Finding the minimum sum of row;
	if (sumMin > sum || sumMin === 0) {
		sumMin = sum;
		counterRowMin = i;
	}

// Finding the maximum sum of row;
	if (sumMax < sum) {
    	sumMax = sum;
    	counterRowMax = i;
    }

    sum = 0;
}

let buffer = 2[counterRowMin];
arr1[counterRowMin] = arr1[counterRowMax];
arr1[counterRowMax] = buffer;

console.log(arr1);