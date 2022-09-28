//5. A) Anonymous Function:

//6)Return median of two sorted arrays of the same size

var arr1= [1,20,3];
var arr2= [10,2,30];

let result=0;
let size= 3;


for(var k=0; k<size; k++){
arr1.push(arr2[k]);
}

arr1.sort(function(a, b){return a - b});


console.log(arr1);


let median = function(){
  
    result= ((arr1[(arr1.length/2)] + arr1[(arr1.length/2)-1])/2);
    console.log(result);
    console.log("Median of two sorted array", result);
    
    }
    
    median(arr1);