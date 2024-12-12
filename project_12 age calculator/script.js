let userInput = document.getElementById("date");
let btn = document.getElementById("btn");
// console.log(userInput);
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
btn.addEventListener("click", () => {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();
  // console.log(`date = ${d1}, month = ${m1}, year = ${y1}`);
  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();
  // console.log(`date = ${d2}, month = ${m2}, year = ${y2}`);
  let d3, m3, y3;
  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m3;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.innerHTML = `date :<span>${d3}</span> month : <span>${m3}</span> year : <span>${y3}</span>`;
  //   console.log(`date = ${d3}, month = ${m3}, year = ${y3}`);
});
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
