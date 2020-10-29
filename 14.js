function SuperMath() {
	this.x = 0;
	this.y = 0;
	this.sign = '+';

	this.input = function() {
		this.x = +prompt('enter x');
		this.y = +prompt('enter y');

		do { this.sign = prompt('enter action');      
        } while (this.sign !== '/' && this.sign !== '*' && this.sign !== '-' && this.sign !== '+' && this.sign !== '%');
		

		if ( this.sign === '-') alert(this.x - this.y);
		if ( this.sign === '/') alert(this.x / this.y);
		if ( this.sign === '*') alert(this.x * this.y);
		if ( this.sign === '%') alert(this.x % this.y);
	}
	
	this.check = function(obj) {
		this.x = obj.x;
		this.y = obj.y;

		confirm('Sum x + y?') ? alert(this.x + this.y) : this.input();
	}
}

example = new SuperMath();
example.check({x:4, y:5});

