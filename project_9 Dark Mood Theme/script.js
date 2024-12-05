const body = document.querySelector('body');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
sun.addEventListener('click',()=>{
    moon.style.visibility = "visible";
    body.style.backgroundColor="black";
    body.style.color = "white";
    sun.style.visibility = "hidden";
});
moon.addEventListener('click',()=>{
    sun.style.visibility = "visible";
    body.style.backgroundColor="white";
    body.style.color = "black";
    moon.style.visibility = "hidden";
});
