let h1 =document.getElementById("h1");
let img =document.getElementById("img");

function over(){
    img.src = "./images/img3.avif"
}
function leave(){
    img.src = "./images/images.jpeg";
}
function editme(){
    let user =prompt("Enter Your Name!!");
    h1.innerText = user;
}
