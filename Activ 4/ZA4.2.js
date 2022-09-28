//2.  Use the rest countries API URL -> https://restcountries.eu/rest/v2/all and display all the country flags in the console.



const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send(null);
request.onload = function () {
    const countries = JSON.parse(request.responseText);
    console.log(countries);
    for(var country of countries){
        const {flags} = country;
        console.log(flags);
    }
}