// В одномерном массиве произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// // 5 элемент поменять с 6 и тд Если массив непарный - последний элемент не трогать.

// let arr = [1, 2, 3, 4, 5];

// let arrRes = new Array(arr.length);

// for ( i = 1; i <= arr.length; i = i + 2 ) {
//     if(arr[i] === undefined) {
//     	arrRes[i - 1] = arr[i - 1];
//     	break;
//     }

//     arrRes[i - 1] = arr[i];
//     arrRes[i] = arr[i - 1];
// }

// console.log(arrRes);

// let arr = new Array(10);
// let sum = 0;
// for ( i = 0; i < arr.length; i++ ) {
// 	//debugger;
//     arr[i] = new Array(5);
//     for ( j = 0; j < arr[i].length; j++ ) {
//     	arr[i][j]  = (Math.round( Math.random() * 10 ));

//     	//sum += arr[i];
// 	}
// }
// console.log(arr);


let sum = 0;
let sumMax = 0;
let counterRowMax = 0;
let counterRowMin = 0;
let sumMin = 0;
let buffer = 0;

let m = 3;
let n = 5;
let arr1 = new Array(m);


for ( i = 0; i <= arr1.length; i++ ) {
		arr1[i] = new Array(n);
	for ( i = 0; i <= arr1.length; i++ ) {
		arr1[i][j] = (Math.round( Math.random() * 50 ));	
	}
}

for ( i = 0; i <= arr1.length; i++ ) {

    if (sumMin > sum || sumMin === 0) {
    	sumMin = sum;
    	counterRowMin = i - 1;
    }

    if (sumMax < sum) {
    	sumMax = sum;
    	counterRowMax = i - 1;
    }

    if (i === arr1.length) {
    	buffer = arr1[counterRowMin];
    	arr1[counterRowMin] = arr1[counterRowMax];
    	arr1[counterRowMax] = buffer
    	break;
    }
    sum = 0;
    

    for ( j = 0; j < arr1[i].length; j++ ) {
     sum += arr1[i][j];
	}
}

console.log(arr1);