let imgBox = document.querySelector(".imgBox");
let imgWrap = document.querySelector(".imgWrap");
let leftSpace = imgBox.offsetLeft;
let originalImg = document.getElementById("originalImg");
let line = document.getElementById("line");
originalImg.style.width = imgBox.offsetWidth + "px";
imgBox.onmousemove = function (e) {
  let boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};
