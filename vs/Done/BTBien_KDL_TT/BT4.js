let inputbk;
inputbk = prompt("Nhập chu vi hình tròn");
let bk = parseInt(inputbk);
let cV = 2 * bk * 3.14;
document.write("Chu vi hình tròn là: " + cV);
document.getElementById("BK").innerText = bk;
document.getElementById("CV").innerText = cV;
