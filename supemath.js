
class SuperMath {
    constructor() {
        this.obj = {x: 2, y: 3, z: '+'};
        this.check(this.obj);
    }

    check(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.z = obj.z;

        confirm(`${this.x} ${this.z} ${this.y}`) ? this.doMath() : this.input();
    }

    input() {
        this.x = +prompt('enter x');
        this.y = +prompt('enter y');
        do { this.z = prompt('enter action');      
        } while (this.z !== '/' && this.z !== '*' && this.z !== '-' && this.z !== '+' && this.z !== '%');

        this.doMath();
    }

    doMath() {
        if ( this.z === '+') alert(this.x + this.y);
        if ( this.z === '-') alert(this.x - this.y);
        if ( this.z === '/') alert(this.x / this.y);
        if ( this.z === '*') alert(this.x * this.y);
        if ( this.z === '%') alert(this.x % this.y);
    }
}

let mySuper = new SuperMath();








