//5. C) Arrow Function:
//1) Print Odd numbers in an array:

var arr1 = [1,2,3,4,5];
var size1= 5;


                                                            
console.log("Given array", arr1);

                                                                

console.log("The Odd numbers in the given array:");            //Checking ODD:

var checkingodd= ()=>{

    for(var j=0; j<arr1.length; j++){
        if(arr1[j]%2!== 0){
            console.log(arr1[j]);
        }
    }
}

checkingodd();