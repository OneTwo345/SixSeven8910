let inputbk;
inputbk = prompt("Nhập bán kính hình tròn");
let bk = parseInt(inputbk);
let dT = bk * bk * 3.14;
document.write("Diện tích hình tròn là: " + dT);
document.getElementById("BK").innerText = bk;
document.getElementById("DT").innerText = dT;
