let data = document.querySelectorAll(".buttonall");
//console.log(data[0]);
let resetbtn = document.querySelector("reset-btn");
let turnO = true; //bullean true or false
//2d array for storing winning patterns
let lahai = document.querySelector(".lahai")
const win = [ 
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];
//console.log(win);

data.forEach((buttonall) => {
   buttonall.addEventListener("click", () => {
     if (turnO === true) {
       buttonall.innerHTML = "X";
       turnO = false;
     } else {
       buttonall.innerHTML = "O";
       turnO = true;
     }
     buttonall.disabled = true;
     checkwinner();
   });
 });


 function reset() {
   data.forEach((buttonall) => {
     buttonall.innerHTML = "";
     buttonall.disabled = false;
   });
   turnO = true; 
 }

const checkwinner = () => {
    for (let winpattern of win){
       //console.log(winpattern[2]);
        let var1 = data[winpattern[0]].innerText;
        let var2 = data[winpattern[1]].innerText;
        let var3 = data[winpattern[2]].innerText;
         
         if( var1 === var2 && var2 === var3 ) {
            lahai.innerHTML = `Winner is ${var1}`;
            return;

         }
         else{
            lahai.innerHTML = "Draw Vayo Haii";
         }
         
    }
}