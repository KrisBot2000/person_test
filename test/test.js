var chai = require('chai');
var expect = require('chai').expect;

function Person(name, age){

}

describe('person', function(){

  newPerson = new Person("Bobby", 34);


  describe('newPerson.name', function(){

    it('should be a string', function(){
      expect(newPerson.name).to.be.a('string');
    });

    it('should be more than one character', function(){
      expect(newPerson.name).to.have.length.greaterThan(1);
    });

  });

  describe('newPerson.age', function(){

    it('should be an integer', function(){
      expect(Number.isInteger(newPerson.age)).to.be.true;
    });

    it('should be greater than 0', function(){
      expect(newPerson.age).to.be.greaterThan(0);
    });

    it('should be less than 120', function(){
      expect(newPerson.age).to.be.lessThan(120);
    });

  });

  describe('newPerson.sayHello()', function(){

    it('should be a string that reads "Hello!"', function(){
      expect(newPerson.sayHello()).to.equal('Hello!');
    });


  });

  describe('newPerson.sayName()', function(){

    it('should read "My name is (name)."', function(){
      expect(newPerson.sayName()).to.equal('My name is "name".');
    });


  });

  describe('newPerson.sayAge()', function(){

    it('should read "I am (age) years old."', function(){
      expect(newPerson.sayAge()).to.equal('I am "age" years old.');
    });


  });

});
console.log('done');