// Вывести в консоль последовательность чисел в обратном порядке, используя рекурсивный вызов функиции

function factorial(n) {
    debugger;
  if (n) {
    return n * factorial(n - 1);
    } else {
        return 1;
    }
}


//  Заполнить массив случайными числами: new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));

let arr = new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));

function func(arr) {
	for(let i = 0; i < arr.length; i++)
	{
		if(arr[i] == undefined) 
			arr[i] = Math.round( Math.random() * 50 );
		else {	
			for(let j = 0; j < arr.length; j++)	
			func(arr[i]);	
		}
	}
	return arr;
}

console.log(func(arr));
