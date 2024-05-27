let finalprice = 0;

function goodsclick() {
    var goods = document.querySelector('#box');
    return goods.value; 
}

function priceclick() {
    var price = document.querySelector('#boxprice');
    return price.value; 
}

function add() {
    var dekhauni = document.querySelector('#totalamount');
    let goods = goodsclick();
    let price = priceclick();
    var dekhauni = document.querySelector('#display');
    display.innerHTML += goods+":" + "$"+ price +"<br>"
    totalamount.innerHTML = "The Total Amount is : $" +calculate();

    
    
}

const reset = () =>{
    var dekhauni = document.querySelector('#display');
    var dekhauni = document.querySelector('#totalamount');
    display.innerHTML = "";
    totalamount.innerHTML ="The Total Amount is : "
   
}

function calculate() {
    let paisa = Number(priceclick());
    finalprice = paisa + finalprice;
    console.log(finalprice);
    return finalprice;
    
}


