literal Notation 


var animal = {
    type:"dog",
    color:"blacl"
}
undefined
typeof(animal)
"object"
animal.color
"blacl"
animal.type
"dog"
animal['color']
"blacl"
animal['type']
"dog"
animal.breed = "pug"
"pug"
animal
{type: "dog", color: "blacl", breed: "pug"}
delete animal.color
true
animal
{type: "dog", breed: "pug"}

var calc = {
    add:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}


calc.add(4,5)



function add(a,b){
    return a+b
}

var add = function(a,b){
    return a+b
}


constructor

var cars = new Object();
cars.model="bmw"
cars.color="red"


// Constructor
var cars = new Object();
cars.model="bmw"
cars.color="red"
"red"
typeof(cars)
"object"
cars['model']
"bmw"
cars['color']
"red"


var tony = new Object();
tony.age = 10
tony.city= "london"
tony.setAge = function(newAge){
    tony.age = newAge
}

var john = new Object();
john.age = 10
john.city= "london"
john.setAge = function(newAge){
    john.age = newAge
}


var createAge = function(a,b){
    this.age = a+b
}


var john = new Object();
john.age = 10
john.city= "london"
john.setAge = createAge


function address(city,houseno){
    this.city = city;
    this.houseno = houseno;
    this.country="India"
}

var john = new address()



function database() { 
    this.selectall=(table)=>{
        console.log("select * form table "+table)
    }
    this.update= function(table,parameter){
        console.log("update where name ="+parameter+"and table"+table)
    }
}

var product = new database()

product.selectall()
