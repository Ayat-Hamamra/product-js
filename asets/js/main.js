
var registerForm =document.querySelector(".registerForm")
var nameInput =document.querySelector("#name");
var nameprice =document.querySelector("#price");
var namecolor =document.querySelector("#color");

var products=[];
registerForm.onsubmit = function(e) {
    e.preventDefault();

    var product ={
        name:nameInput.value,
        price:nameprice.value,
        color:namecolor.value,
    };
    products.push(product);
     print() ;

}
function print() {
var data =``;
for(var i=0;i<products.length;i++) {
    data+=`
    <tr>
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].color}</td>
    </tr>`;
}
document.querySelector("tbody").innerHTML=data;
}