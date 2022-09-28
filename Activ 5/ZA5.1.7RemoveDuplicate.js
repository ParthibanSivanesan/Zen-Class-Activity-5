//5. A) Anonymous Function:

//7)Remove duplicates in the given array

let arr= [1,2,3,4,1,35,36,35];
let i, j;

let removeduplicates= function(){
for(i=0; i<arr.length; i++){
    for(j=0; j<arr.length; j++){
        if(i!=j && arr[i]===arr[j]){
            arr.splice(j, 1);
        }
    }
}
}

removeduplicates(arr);
console.log("Result Array", arr);
