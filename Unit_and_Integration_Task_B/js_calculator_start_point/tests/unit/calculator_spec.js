var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })


  // add
  it('it should be able to add two numbers together', function(){
     calculator.add(1);
     calculator.operatorClick('+')
     calculator.add(4);
     const actual = calculator.runningTotal;
     assert.strictEqual(actual, 5);
  })


  // subtract
  it('it should be able to subtract two numbers', function(){
    calculator.add(7);
    calculator.operatorClick('-')
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })


  // multiply
  it('it should be able to multiply two numbers', function(){
    calculator.add(5);
    calculator.operatorClick('*')
    calculator.multiply(3);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15)
  })


  // divide
  it('it should be able to divide two numbers', function(){
    calculator.add(21);
    calculator.operatorClick('/')
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })


  // numberClick
  it('it should be able to concatenate multiple numbers', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 125)
  })


  // operatorClick
  it('it should be able to chain multiple operations', function(){
    calculator.add(10);
    calculator.operatorClick('*')
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 50)
  })


  // clearClick
  it('it should be able to clear the running total', function(){
    calculator.numberClick(5);
    calculator.clearClick()
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 0)

  })

});
