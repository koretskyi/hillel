for ( i = 0; i <= 150; i++) {
	console.log( i );
}

counter = 0;
for ( i = 0; i < 150; i++) {
    counter += i;    
	console.log( counter );
}

counter = 0;
for ( i = 0; i < 150; i+=2) {
    counter += i;    
	console.log( counter );
}

let a = prompt('enter a');
let b = prompt('enter b');
    
    while( a < b ) {
        a++;
        if( a % 2 === 0){
            console.log( a * a );
        }
    }

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
}