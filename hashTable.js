const obj1 = {
  prop1: "I'm",
  prop2: "an",
  prop3: "object",
};

const obj2 = {
  prop1: "Hello!",
  prop3: function () {
    return "I'm a property dude!";
  },
};

console.log(obj1.prop1);
console.log(obj2.prop3());
console.log(obj1["prop3"]);
