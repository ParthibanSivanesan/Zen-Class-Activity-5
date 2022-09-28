//5. A) Anonymous Function:

//2) Convert all the strings to title caps in a string array:

var str2= "ponniyin selvan first part releasing on end of september";


var sentence= [];                                                                               //Temp. array for final result
var titlecaps= function(){
    var str2intoarr= str2.split(" ");                                                           //converting str into array
    for(var k=0; k<str2intoarr.length; k++){
      sentence[k]= str2intoarr[k][0].toUpperCase(str2intoarr[k]) + str2intoarr[k].slice(1);     //changing first letter to caps in each sentence
    }

}

titlecaps(str2);

var resultstr2= sentence.join(" ");                                                             //converting array into str
console.log(resultstr2);
