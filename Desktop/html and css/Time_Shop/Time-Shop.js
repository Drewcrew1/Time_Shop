let hydroWatch = document.querySelector('.hydroWatch');   // 1125
let yachtWatch = document.querySelector('.yachtWatch');  //18750
let pelagosWatch = document.querySelector('.pelagosWatch'); //4400
let cartItems = document.querySelector('.cartItems');
hydroWatch.addEventListener("click", function(){
    let cartItems = document.querySelector('.cartItems');
    document.querySelector('.hydroWatch').innerHTML = "Added";
    let nodeLi = document.createElement("li");
    let textnode = document.createTextNode("HydroConquest");
    nodeLi.appendChild(textnode);
    // cartItems.appendChild(nodeLi);

});
