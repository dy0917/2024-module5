class Calculator {
    path;
  constructor(path) {
    this.path= path
  }
  #log = () => {
    // private method
    console.log("test");
  };
  #test = () => {
    console.log("thisis a test", this.path);
  };
  add(num1, num2) {
    this.#log(); // public method calling private method
    this.#test();
    const value = num1 + num2;
    return value;
  }
  static aFunction (){
    console.log('aFunction');
  }
}

module.exports = Calculator;
