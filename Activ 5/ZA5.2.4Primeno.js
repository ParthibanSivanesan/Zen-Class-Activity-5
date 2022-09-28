//5. B) IIFE Function:

//4)Return all the Prime numbers in an array

var num = prompt("Enter the number to check Prime or not");               //Getting i/p & convert str into number
var flag = true;                                                                  //declaring flag var, to check prime in final

(function(){

    if(num === 1){                                                                //checking num whether num is 1
        console.log(`${num} is not a prime and composite number`);
    }else if(num>1){                                                              //checking num whether num is greater than 1
        
        for(var i=2; i<num; i++){                                                 //dividing one buy one value till (num-1)
            if(num%i===0){                                                  
                flag = false;                                                     //if it isn't prime no, flag will turn to false
                break;                                                            //loop ending
            }
        }
        if(flag== true){                                                                  //checking flag whether flag is true or false
            console.log(`${num} is a Prime number`);
        }else{
            console.log(`${num} is not a Prime number`);
        }
    }
    else{                                                                         //checking num whether num is less than 1
        console.log(`${num} is not a prime number`);
    }


})();

