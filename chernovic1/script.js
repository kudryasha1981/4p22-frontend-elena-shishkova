class Person {
    _firstName;
    _lastName;

    constructor(firstName = '', lastName = '') {
        this._firstName = firstName;
        this._lastName = lastName;
    }
}

const person = new Person('Elena','Shishkova');

console.log()