//////// Filter /////////////
var age = [4,6,8,12,14,18,17,34,45]

var checkAdults = (a) => {
    return  a>= 18
}

age.filter(checkAdults)

var age = [4,6,8,12,14,18,17,34,45]
var add = (a) => {
    return a*10
}
age.map(add)