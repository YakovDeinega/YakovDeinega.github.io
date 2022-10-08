function calc(){
    let f1=document.getElementsByName("field1");
    let f2=document.getElementsByName("field2");
    f1[0].value=parseInt(f1[0].value,10);
    f2[0].value=parseInt(f2[0].value,10);
    if(isNaN(f1[0].value) || isNaN(f2[0].value)){
        alert("Введите другие параметры");
        return false;
    }
    let res=f1[0].value*f2[0].value;
    alert(res);
}
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button1");
    b.addEventListener("click", calc);
  });