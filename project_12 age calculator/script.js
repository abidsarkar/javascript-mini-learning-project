let userInput = document.getElementById("date");
let btn = document.getElementById("btn");
// console.log(userInput);
userInput.max = new Date().toISOString().split("T")[0];

btn.addEventListener("click",()=>{
    let birthDate = new Date(userInput.value)
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() +1;
    let y1 = birthDate.getFullYear();
    console.log(`date = ${d1}, month = ${m1}, year = ${y1}`);
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() +1;
    let y2 = today.getFullYear();
    console.log(`date = ${d2}, month = ${m2}, year = ${y2}`);
});
