//1. How to compare two JSON have the same properties without order?
//var obj1 = { name: “Person 1”, age:5 };
//var obj2= { age:5, name: “Person 1” };



var obj1 = {name: "Person1", age: 5};
var obj2 = {age:5, name: "Person1"};

for(var key in obj1){
if(obj1["key"]=== obj2["key"])
{
console.log(key);
console.log("Same Properties");
}
}