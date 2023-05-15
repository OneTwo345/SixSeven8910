let inputWidth
let inputHeight
inputWidth = prompt("Nhập chiều dài hình chữ nhật");
inputHeight = prompt("Nhập chiều rộng hình chữ nhật");
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;
let chuVi = (width + height) * 2;
document.write("Diện tích hình chữ nhật là: " + area
);


document.write("<br> Chu vi hình chữ nhật là: " + chuVi);
