//5. C) Arrow Function:
// 3)Sum of all numbers in an array

var arr3 = [1,2,3,4,5];
var size3 = 5;                                      //Getting Size of an array
var resultsum = 0;                                                                  //declaring variable to store final sum 
                                                                                    //Getting Array elements

console.log(arr3);
                                                                                    //Doing sum of Array elements
let sumofarr= ()=>{
    for(var m=0; m<arr3.length; m++){
    resultsum = resultsum + parseInt(arr3[m]);                                      //Doing sum & without parseInt it consider string
}
}
sumofarr();

console.log(resultsum);