

const displaycalc = document.getElementById("displaycalc");
//(input) inside the functing is the prameter and the html while click is the 
//argument 
function display(input)
 {


    displaycalc.value += input;// concadinates the value

 }

function cleardisplay(){

    displaycalc.value = "";

}

function calculatevalue(){

   try{
    displaycalc.value = eval(displaycalc.value);//built in function
   }
  catch (error) {
    displaycalc.value = "Error";
    }

}