const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdown = document.querySelectorAll("#selecthai");

let amountdisplay = document.querySelector('.msg')
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");
let btn = document.querySelector("#btn")


for ( let select of dropdown){
  for (currcode in countryList){
    let newoption = document.createElement("option");
    //console.log(newoption);
    newoption.innerText = currcode;
    newoption.value = currcode;
    select.append(newoption);
  }

  addEventListener("change", (evt) =>{
    updateflag(evt.target);
  });
}

// for flag chaning api
 const updateflag = (element) =>{
    let currcode = element.value;  
    let countryCode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
 }



btn.addEventListener("click",  async (evt) =>{
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amountvalue = amount.value;
   if (amountvalue == "" || amountvalue < 1){
    amountvalue = "1";
    amount.value = "1"; 
   }

   // brining the value of current money rates using apis

 const url = `${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;
 let response = await fetch(url);
 let incomingdata = await response.json();

 let first = fromcurr.value.toLowerCase();
 let second = tocurr.value.toLowerCase();

 
 // making rates and other\
 let rate = incomingdata[first][second];
 
 let convertedamount = amountvalue * rate;
let nconvertedamount = convertedamount.toFixed(2);
amountdisplay.innerText = `The Converted amount is ${nconvertedamount}`;
  
});







  
