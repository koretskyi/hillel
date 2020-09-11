
1.1 Ораганизовать перебор чисел от 1 до 150.
for ( i = 0; i <= 150; i++) {
	console.log( i );
}

1.2 Посчитать сумму всех чисел
counter = 0;
for ( i = 0; i < 150; i++) {
    counter += i;    
}
console.log( counter );

1.3 Посчитать сумму чётных чисел.
counter = 0;
for ( i = 0; i <= 150; i++) {
    if( i % 2 === 0) {
       counter += i;     
    }      
}
console.log(counter);

2. Заставить пользователя ввести с клавиатуры число.
let a = prompt('enter a digit');

3. Реализовать скрипт согласно схеме:

do {
  let a = prompt('Who is come?');

  if (a === 'admin') {
        let b = prompt('Enter password');

        if(b === 'Black lord') {
                alert('Well come');
        }
        else if(b === null) {
            alert('The enter has been rejected');
            break;
        }
        else {
            alert('Wrong password');
        }
        }

  else if(a === null) {
    alert('The enter has been rejected');
    break;
} else {
    alert('I do not know who you are')
    }
} while (true);

4. 

function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result = result * i;
    }
    return result;
}

5. Ввести с клавиатуры 2 числа a и b (где a < b). Запустить цикл перебора от a до b. Вывести в консоль квадраты чётных чисел.
let a = prompt('enter a');
let b = prompt('enter b');
    
    while( a < b ) {
        a++;
        if( a % 2 === 0){
            console.log( a * a );
        }
    }

6. (**)Проверить число на простоту. Число вводить с клавиатуры.
function simpleTest( simple = prompt('enter a digit') ) {
		counter = 0;
        for( i = 1; i <= simple; i++ ) {
            if( simple % i === 0) {
                counter++;
            }
        }

        if( counter > 2 || counter <= 1 ) {
            console.log('this is not simple number');
        }

        console.log('this is simple number');  