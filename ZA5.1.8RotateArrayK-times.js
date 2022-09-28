//5. A) Anonymous Function:

//8)Rotate an array by k times

let arr= [1,2,3,4,5];

let k=3;
let n=arr.length;
let rotate= function(){
for(var i=0; i<k; i++){
  arr.unshift(arr.pop()); //**removes last element & add it to the first place in array
}
}

rotate(arr);

console.log("The array rotated by k times", arr);