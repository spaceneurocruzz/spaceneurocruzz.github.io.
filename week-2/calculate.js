function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}
// Try to call calculate function correctly
/*
    For example, if we have an add function like this:
    function add(args){
    return args.n1+args.n2;
    }
    We can call it by passing an object created by JSON literal:
    add({n1:3, n2:4}); // your first way
    You should apply constructor or class as another way to create a proper object.
    add(用類別或建構式產生的物件); // your another way
    */

//first way
data = {
  op: "+",
  n1: 100,
  n2: 1,
};

console.log(calculate(data));

//second way
class calculateObj {
  constructor(operator, num1, num2) {
    this.op = operator;
    this.n1 = num1;
    this.n2 = num2;
  }
}

let obj = new calculateObj("+", 100, 1);
console.log(calculate(obj));
