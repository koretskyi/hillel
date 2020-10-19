// 0) Cоздать конвертер-функцию которая получает  mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]]; 

let mass = [[1,2,3,[3.1]], 4, [5,6, [7, 8]]];
let massClear = [];

function func(arr) {

		for(let i = 0; i < arr.length; i++)
		{
			typeof(arr[i]) === 'number' ? massClear.push(arr[i]) : func(arr[i]);
		}			
	return massClear;
}

console.log(func(mass));

// 1) Написать функцию convert(obj) : obj = { a: 10, b: 12, c: { f: 13 } -> newObj = { a: 10, b: 12, f: 13 }

let obj = { a: 10, b: 12, c: { f: 13 } };
let newObj = {};

function convert(obj) {
	
	for (let key in obj) {
		typeof obj[key] == 'object' ? convert(obj[key]) : newObj[key] = obj[key];
	}
	return newObj;
}
console.log(convert(obj));

//2 )   Написать функцию assignObjects(obj1, obj2)

let obj1 = { x: 10, b:20, z: 30, k : 10  }, obj2 = { x: 20, y: 30 , k : 30};

function assignObjects(obj1, obj2) {
	let obj = {};

	for (let key in obj1) {
		obj[key] = obj1[key];
	}
	
	for (let key in obj2) {
		obj[key] = obj2[key];
	}
	return obj;
}

console.log(assignObjects(obj1, obj2));

// 3) Адаптировать функцию assignObjects() под неопределенное количество объектов. 

let obj1 = { x: 10, b:20, z: 30, k : 10  }, obj2 = { x: 20, y: 30 , k : 30}, obj3 = { h: 20, y: 100 , k : 300};

function assignObjects() {
	let obj = {};
	
	for (i = 0; i < arguments.length; i++) {
		for (let key in arguments[i]) {
			obj[key] = arguments[i][key];
		}
	}
	
	return obj;
}

console.log(assignObjects(obj1, obj2, obj3));

//4) (**)Имеем функцию getPerson(name, from, to)

let nameArray = ["Вася", "Петя", "Сеня" , "Федор", "Егор"];
let people = {};

function getPerson(name, from, to) {
	return  {name, age: Math.round( Math.random() * 50 )}
}

function getAge(obj) {
	
	let maxAge = averAge = 0, i = 0;
	
	for (key in obj) {
		averAge += obj[key]['age'];
		maxAge < obj[key]['age'] ? maxAge = obj[key]['age'] : undefined; 
		i++;
	}
	
	averAge = averAge / i;
	console.log("Средний возраст = " + averAge + "; Старший = " + maxAge);
}

for(i = 0; i < nameArray.length; i++) {
	console.log(people[i] = getPerson(nameArray[i]));
}

getAge(people);
