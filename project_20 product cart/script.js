let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");
btn[0].addEventListener(("click"),()=>{
    productImg.src = './img/image.png';
})
btn[1].addEventListener(("click"),()=>{
    productImg.src = './img/image2.png';
})
btn[2].addEventListener(("click"),()=>{
    productImg.src = './img/image3.png';
})