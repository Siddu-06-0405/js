//Example 1

const o = {
    a: 1,
    b: 2,
    // __proto__ sets the [[Prototype]]. It's specified here
    // as another object literal.
    __proto__: {
      b: 3,
      c: 4,
    },
};

// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
// what that means later).
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and
// there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.

//Example 2

const o1 = {
a: 1,
b: 2,
// __proto__ sets the [[Prototype]]. It's specified here
// as another object literal.
__proto__: {
    b: 3,
    c: 4,
    __proto__: {
    d: 5,
    },
},
};
  
  // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null
  
  console.log(o1.d); // 5

//Example 3
// In JavaScript, any function can be added 
// to an object in the form of a property.

const parent = {
    value: 2,
    method() {
      return this.value + 1;
    },
};

console.log(parent.method()); // 3
// When calling parent.method in this case, 'this' refers to parent

// child is an object that inherits from parent
const child = {
    method2(){
        return this.value -1;
    },
    __proto__: parent,
};
console.log(child.method()); // 3
// When child.method is called, 'this' refers to child.
// So when child inherits the method of parent,
// The property 'value' is sought on child. However, since child
// doesn't have an own property called 'value', the property is
// found on the [[Prototype]], which is parent.value.

child.value = 4; // assign the value 4 to the property 'value' on child.
// This shadows the 'value' property on parent.
// The child object now looks like:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Since child now has the 'value' property, 'this.value' means
// child.value instead
child.val = 5;

console.log(child.method2())
// Constructors
// In JavaScript, a function can be used as a constructor.
const boxPrototype = {
    getValue() {
      return this.value;
    },
};

const boxes = [
    { value: 1, __proto__: boxPrototype },
    { value: 2, __proto__: boxPrototype },
    { value: 3, __proto__: boxPrototype },
];
// The boxes array contains objects that all inherit from boxPrototype.
// This way, all boxes' getValue method will refer to the same function, lowering memory usage.
console.dir(boxes[0].__proto__); // [1, 2, 3]
console.log(Object.getPrototypeOf(boxes));

// const fs = require('fs');
// fs.readFile('classesIn.js','utf-8',(err,data)=>{
//     console.log(data);
//     // console.clear()
// })