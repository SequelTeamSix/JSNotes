/*
Typescript is a superset of Javascript
meaning it 'contains' javascript and adds its own features
It is converted to Javascript through a process called 'transpilation'
'compilation' vs 'transpilation'
'compilation' is the conversion of a high-level language to a low level one (java to bytecode)
'transpilation' is the conversion of a high-level languiage to another high-level language
(javascript es6 to javascript es5 (babel)) or (typescript to javascript (tsc))

converting from ts to js:
we need to use tsc (typescript compiler)
in which case the command is 'tsc {filename}'
*/



let str: string = "test";
console.log(str);
/*
from js:
boolean, number, string, undefined, null, symbol (es6)
from ts:
void, enum, tuple any
void: it cannot be any type
enum: it could be one of multiple 'things'
tuple: it is a predefined set of variable types [number, boolean]
any: reflects how variables work in js: a variable may be anything
*/
let multiVar : number | string | boolean;
multiVar = 5;
/*
interfaces?
interfaces are what we call a contractual guarantee that data will follow a particular format
*/
// we also introduce access modifiers in classes, expansion of OOP in this regard
// let's also take time to introduce decorators, which function the same as annotations in java
// (meaning they wrap some functionality around a variable, function, or class)