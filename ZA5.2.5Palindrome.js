//5. B) Anonymous Function:
// 5)Return all the Palindromes in an array

var str5= "radar";                                   //Input from User
var str5result= [];                                                                         //Ref. Array
var temp5, resultpalindrome = 0;                             //Ref. Variable array temp5 & Variable that decides given i/p is Palindrome or not

(function(){
 temp5= str5.split("");                                      //converting str into array
var B= (temp5.length-1);                                     //declaring Var to check from the last element
for(var A=0; A<temp5.length; A++){                           //declaring variable to check from the first element
    if(temp5[A]===temp5[B]){                                 //checking first element & last element in the sequence
        str5result= str5result + temp5[B];                   //store the array elemnts in reverse
        B--;                                                 //devrement the var to check from the last element
     }
//We cant compare array, so, if it is Palindrome, the new array str5result created, so we check only th arr length, if it match thatvariable turns 1
}if(str5result.length==temp5.length){                        
   resultpalindrome= 1;
   return;
}

})();


if(resultpalindrome== 1){                                     //checking result palindrome to confirm
  console.log("Palindrome");
}else{
  console.log("Not Palindrome");
}