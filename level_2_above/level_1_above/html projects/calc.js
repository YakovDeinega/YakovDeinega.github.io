function calc() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    f1[0].value = parseInt(f1[0].value, 10);
    f2[0].value = parseInt(f2[0].value, 10);
    if (isNaN(f1[0].value) || isNaN(f2[0].value)) {
        alert("Введите другие параметры");
        return false;
    }
    let res = f1[0].value * f2[0].value;
    alert(res);
}
function makePrice(){
    let s =document.getElementsByName("prodType");
    let select=s[0];
    let price=0;
    let prices=getPrices();
    let priceIndex=parseInt(select.value)-1;
    if(priceIndex>=0){
        price=prices.prodTypes[priceIndex];
    }
    let f=document.getElementsByName("amount");
    let radioDiv=document.getElementById("radios");
    radioDiv.style.display=(select.value=="2"?"block":"none");
    let radios=document.getElementsByName("prodOptions");
    radios.forEach(function(radio){
        if (radio.checked) {
            let optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
            price += optionPrice;
            }
        }
    });
    let checkDiv=document.getElementById("checkboxes");
    checkDiv.style.display=(select.value=="3"?"block":"none");
    let checkboxes=document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox){
        if(checkbox.checked){
            let propPrice=prices.prodProperties[checkbox.name];
            if(propPrice!==undefined){
                price+=propPrice;
            }
        }
    });
    let result=document.getElementById("result");
    result.innerHTML=price*f[0].value+" рублей";
}
function getPrices(){
    return{
        prodTypes: [150, 200, 250],
        prodOptions: {option1:50, option2:70, option3:100 },
        prodProperties:{prop1: 20, prop2: 10, prop3:50}
    };
}
function deleteV(){
    let checkDiv=document.getElementById("checkboxes");
    let checkboxes=document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox){
        checkbox.checked=false;
    });
    let radioDiv=document.getElementById("radios");
    let radios=document.getElementsByName("prodOptions");
    radios.forEach(function(radio){
        radio.checked=false;
    });
}
window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = "none";
    let s=document.getElementsByName("prodType");
    let select = s[0];
    select.addEventListener("change", function(event) {
        let target = event.target;
        console.log(target.value);
        deleteV();
        makePrice();
    });
    let b2 = document.getElementById("button");
    b2.addEventListener("click", makePrice);
    let b1 = document.getElementById("button1");
    b1.addEventListener("click", calc);
});
