let inputdoC;

inputdoC = prompt("Nhập nhiệt độ C ");
let doC = parseInt(inputdoC);
let doF = (9 * doC + 160) / 5;
document.write("Nhiệt độ F là: " + doF);
document.getElementById('ndoC').innerText = doC;
document.getElementById("ndoF").innerText = doF;