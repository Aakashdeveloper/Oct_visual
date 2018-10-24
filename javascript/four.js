var fruits = ["apple", "ornage", "banana", 78 ]

var fruits = ["apple", "ornage", "banana", 78 ]
undefined
fruits[0]
"apple"
fruits[4]
undefined
fruits.push("mango")
5
fruits
(5) ["apple", "ornage", "banana", 78, "mango"]
fruits.pop()
"mango"
fruits.pop(77)
78

var a = ["london","newyork","amsterdam"]
undefined
var a = ["london","newyork","amsterdam","helsinki"]
undefined
a.slice(2,4)
(2) ["amsterdam", "helsinki"]
var a = ["london","newyork","amsterdam","helsinki"]
undefined
a.shift("2")
"london"
a.unshift("2")
4
a
(4) ["2", "newyork", "amsterdam", "helsinki"]
a.splice(1,0, "manshster", "venice")
[]
a
(6) ["2", "manshster", "venice", "newyork", "amsterdam", "helsinki"]
a.splice(1,1, "rome", "milan")
["manshster"]
a
(7) ["2", "rome", "milan", "venice", "newyork", "amsterdam", "helsinki"]0: "2"1: "rome"2: "milan"3: "venice"4: "newyork"5: "amsterdam"6: "helsinki"length: 7__proto__: Array(0)
a.splice(1,2, "huague", "knustfi")
(2) ["rome", "milan"]
a
(7) ["2", "huague", "knustfi", "venice", "newyork", "amsterdam", "helsinki"]
a
(7) ["2", "huague", "knustfi", "venice", "newyork", "amsterdam", "helsinki"]
a.indexOf(1)
-1
a.indexOf("venice")
3
var b = [1,2,3,4]
undefined
a+b
"2,huague,knustfi,venice,newyork,amsterdam,helsinki1,2,3,4"
a.concat(b)
(11) ["2", "huague", "knustfi", "venice", "newyork", "amsterdam", "helsinki", 1, 2, 3, 4]