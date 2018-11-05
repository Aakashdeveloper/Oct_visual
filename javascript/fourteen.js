function human(name){
    this.name=name;
    this.legs = 2;
}

function robot(name){
    this.name = name;
    this.legs = 4;
    this.city = " london"
}


human.prototype = new robot()

var buddy = new human("john")