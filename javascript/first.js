ES=> Ecma script5 => old 
ES=> Ecma script 6 => new 

ec5

var a = 10


es6
let b = 10
const c = 11

var a = 10
undefined
a
10
var a = 11
undefined
let b = 10
undefined
b
10
let b = 11
VM182:1 Uncaught SyntaxError: Identifier 'b' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM182:1
b = 11
11
const d = 11
undefined
d
11
const d = 110
VM222:1 Uncaught SyntaxError: Identifier 'd' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM222:1
d=112
VM232:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:2




a = 10

if( a == 10){
    let name2 = "harika"
}

if(a == 10){
    var myname = "aakash"
}

string  = "javascript"  'hiiii'   "10"  '1'  "true"  'false'
number  = 10  56 7 567
boolean= true / false