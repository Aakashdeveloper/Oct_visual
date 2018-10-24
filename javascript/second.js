var subject = "javascript"
undefined
subject.toUpperCase()
"JAVASCRIPT"
subject.toLowerCase()
"javascript"
subject.length()
VM192:1 Uncaught TypeError: subject.length is not a function
    at <anonymous>:1:9
(anonymous) @ VM192:1
subject.length
10
subject.split("")
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
url = 'https://global.gotomeeting.com/join/166860981'
"https://global.gotomeeting.com/join/166860981"
url.split('/')
(5) ["https:", "", "global.gotomeeting.com", "join", "166860981"]
subject.split("")
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
var out = subject.split("")
undefined
out
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
out[0]
"j"
out[4]
"s"
url.split('/')[4]
"166860981"
url = 'https://global.gotomeeting.com/join/j/166860981'
"https://global.gotomeeting.com/join/j/166860981"
url.split('/')[4]
"j"
out.length
10
out[9]
"t"
out[10]
undefined
url.split('/')[url.length-1]
undefined
url.length
47
var out1 = url.split('/')
undefined
out1
(6) ["https:", "", "global.gotomeeting.com", "join", "j", "166860981"]
out1[out1.length-1]
"166860981"
a = "hiii"
"hiii"
b = " i m doing javascript"
" i m doing javascript"
a+b
"hiii i m doing javascript"
a.concat(b)
"hiii i m doing javascript"
`${a}${b}`
"hiii i m doing javascript"
`hiiii ${b}`
"hiiii  i m doing javascript"


a = "hiii"
"hiii"
b = " i m doing javascript"
" i m doing javascript"
a-b
NaN
a*b
NaN
a/b
NaN
a.charAt(0)
"h"
a.charAt(1)
"i"
a.indexOf('h')
0

a = "hiii"
"hiii"
b = " i m doing javascript"
" i m doing javascript"
a-b
NaN
a*b
NaN
a/b
NaN
a.charAt(0)
"h"
a.charAt(1)
"i"
a.indexOf('h')
0
a.slice(1)
"iii"
a.slice(8)
""
b = " i m doing javascript"
" i m doing javascript"
b.slice(2,4)
" m"
b.slice(4)
" doing javascript"
b = " i m doing javascript.   "
" i m doing javascript.   "
b.trim()
"i m doing javascript."
var name = "jAVaScriPT"
undefined
var out = name.toLowerCase()
undefined
out
"javascript"
out.charAt(0).toUpperCase()
"J"
a.slice(1)
"iii"
out.slice(1)
"avascript"
out.charAt(0).toUpperCase()+out.slice(1)
"Javascript"
b = "i m doing javascript"
"i m doing javascript"
b.replace('javascript', 'python'
VM1113:1 Uncaught SyntaxError: missing ) after argument list
b.replace('javascript', 'python')
"i m doing python"
c="javascript"
"javascript"
c.substr(2,4)
"vasc"

a = 10
10
b = 20
20
a+b
30
a-b
-10
a*b
200
a/b
0.5
a%b
10
4%2
0
3
3
3%2
1

var a = "jjjjj"
undefined
typeof(a)
"string"
var a = 897
undefined
typeof(a)
"number"
var a = true
undefined
typeof(a)
"boolean"