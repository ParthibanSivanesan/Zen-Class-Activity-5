

// let api = 'http://makeup-api.herokuapp.com/api/v1/products.json'
// //let api2 = 'http://makeup-api.herokuapp.com/api/v1/products.json'

// var c2= [];
// let c1 = {};
// var wholeParentarea = document.querySelector('.parent');


// async function fetchingfunction(){
//   try{  
//    let p1 = await fetch(api);
    
//    // console.log(p1);
//    c1 = await p1.json();
   
//   c2=[...c1];

//    console.log('Entire Data',c1);
   
//    //HTML DOM Elements:
//    var wholeParentarea = document.querySelector('.parent');
//    //To taking Data:
//    for(let i of c1){
//     var parentContainer = document.createElement("div");
//      parentContainer.classList.add('box')
//      try{
        
//        let obj = {
//           "Product Name": i.name,
//           "Brand": i.brand,
//           "Product Price": i.price_sign + ' ' + i.price,
//           "Product Image": i.api_featured_image,
//           "Product Link": i.product_link,
//           "Prodcut Description": i.description,
//         }
      
//      for(let j of Object.keys(obj)){
//         if(obj[j].includes('api_featured_image')){
//             var imgdata = document.createElement("img");
//             imgdata.setAttribute('src',obj[j]);
//             imgdata.classList.add('image')
//             parentContainer.append(imgdata);
//             continue;
//         }else if(j.includes('Name')){
//             var productname = document.createElement('p');
//             productname.innerHTML = `<b>${obj[j]}<b/>`;
//             parentContainer.append(productname);
//         }else if(j.includes('Brand')){
//          var brand = document.createElement('p');
//          brand.innerHTML = `By ${obj[j]}`;
//          parentContainer.append(brand);
//         }else if(j.includes('Price')){
//          var price = document.createElement('p');
//          price.innerHTML = `<b>${obj[j]}<b/>`;
//          parentContainer.append(price);
//         }else if(j.includes('Description')){
//          var description = document.createElement('p');
//          description.classList.add('description');
//          description.innerHTML = `<a href="javascript:alert('${obj[j]}')">Read More</a>`;
//          parentContainer.append(description);
//         }else if(j.includes('Link')){
//          var prodlink = document.createElement('p');
//          prodlink.innerHTML = `<button><a href="${obj[j]}" target="_blank"><b>Buy</b></a></button>`;
//          prodlink.classList.add('button');
//          parentContainer.append(prodlink);
//         }
//       //   var para1 = document.createElement('p');
//       //   para1.innerHTML = `<label><b>${j}</b></label> : ${obj[j]}`;
//       //   parentContainer.append(para1);
//      }
//      wholeParentarea.append(parentContainer);
//      console.log(parentContainer);

//     //Searching Input
//    //  var userInput = document.getElementById('userinput');

//    //  userInput.addEventListener((e) => {
//    //    var val1 = e.target.value;
//    //    console.log(`You searched for ${val1}`);
//    //    // for(let k of Object.keys(obj)){
//    //    //  if(obj[k].innerHTML.tolowercase().includes(value)){
//    //    //    console.log(`You searched for ${userInput.value}`);
//    //    //  }
//    //    // } 
        
//    //  });
   
//    // sendinginput(c1);
   
//      }
//      catch{
//         console.log('no data');
//      }

//    }
//    //c2 ={...c1};
//    //console.log(c2);
//    // sendinginput(c2);

   

// }
// catch{
//     console.log('Error Occured');
// }
// return c1, c2;
// }

// fetchingfunction();

// const searchInput = document.getElementById("userinput");
// // var x =1;
// if(searchInput){
// searchInput.addEventListener("input", (e) =>{
//    const value1 = e.target.value.toUpperCase();
//    console.log(value1);
   
//    let wholeParentarea2 = document.querySelector('.parent');
//    for(let m of c1){

      
      
//       let obj2 = {
//          "Name": m.name,
//          "Brand": m.brand,
//          "Price": m.price_sign + ' ' + m.price,
//          "Image": m.api_featured_image,
//          "Link": m.product_link,
//          "Description": m.description,
//         }
      

//          for(let n of Object.keys(obj2)){ 
        
//         if(obj2.Name.toUpperCase().includes(value1)){ 
         
//          var parentContainer1 = document.createElement("div");
//       parentContainer1.classList.add('box')
//          console.log(obj2);
//                            // obj2["Brand"].toUpperCase().includes(value) || 
//                            // obj2["Price"].includes(value)){
//                               //console.log("One two three")
                          
//                               wholeParentarea.style.display = "none";
//                               wholeParentarea2.classList.toggle("visible")
                           
//                                  if(obj2.Image.includes('api_featured_images')){
//                                      var imgdata1 = document.createElement("img");
//                                      imgdata1.setAttribute('src',obj2[n]);
//                                      imgdata1.classList.add('image')
//                                      parentContainer1.append(imgdata1);
//                                      continue;
//                                  }else if(n.includes('Name')){
//                                      var productname1 = document.createElement('p');
//                                      productname1.innerHTML = `<b>${obj2[n]}<b/>`;
//                                      parentContainer1.append(productname1);
//                                  }else if(n.includes('Brand')){
//                                   var brand1 = document.createElement('p');
//                                   brand1.innerHTML = `By ${obj2[n]}`;
//                                   parentContainer1.append(brand1);
//                                  }else if(n.includes('Price')){
//                                   var price1 = document.createElement('p');
//                                   price1.innerHTML = `<b>${obj2[n]}<b/>`;
//                                   parentContainer1.append(price1);
//                                  }else if(n.includes('Description')){
//                                   var description1 = document.createElement('p');
//                                   description1.classList.add('description');
//                                   description1.innerHTML = `<a href="javascript:alert('${obj2[n]}')">Read More</a>`;
//                                   parentContainer1.append(description1);
//                                  }else if(n.includes('Link')){
//                                   var prodlink1 = document.createElement('p');
//                                   prodlink1.innerHTML = `<button><a href="${obj2[n]}" target="_blank"><b>Buy</b></a></button>`;
//                                   prodlink1.classList.add('button');
//                                   parentContainer1.append(prodlink1);
//                                  }
//                               }
//                            //}
//                               wholeParentarea2.append(parentContainer1);
         
//         }
//       //   searchresult.element.classList.toggle("hide", !isvisble)
//       }
//    })
// }
