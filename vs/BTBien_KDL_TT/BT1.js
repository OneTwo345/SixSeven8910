let inputvatLy;
let inputhoaHoc;
let inputsinhHoc;
inputvatLy = prompt("Nhập điểm môn Vật Lý");
inputhoaHoc = prompt("Nhập điểm môn Hóa Học");
inputsinhHoc = prompt("Nhập điểm môn Sinh Học");
let vatLy = parseInt(inputvatLy);
let hoaHoc = parseInt(inputhoaHoc);
let sinhHoc = parseInt(inputsinhHoc);
let tB = (vatLy + hoaHoc + sinhHoc) / 3
document.write("Điểm trung bình 3 môn là: " + tB);
let tong = (vatLy + hoaHoc + sinhHoc);
document.write(" <br> Tổng điểm 3 môn là: " + tong);

document.getElementById('vatly').innerText = vatLy;
document.getElementById('hoahoc').innerText = hoaHoc;
document.getElementById('sinhhoc').innerText = sinhHoc;
document.getElementById('trungbinh').innerText = tB;
document.getElementById('tong').innerText = tong;
if (tB >= 8) { document.write("<br> Xếp loại học sinh giỏi"); }
else if (tB >= 6.5) {
    document.write(
        "<br> Xếp loại học sinh khá");

} else {
    if (tB >= 5) {
        document.write(
            "<br> Xếp loại học sinh trung bình")

    } else {
        document.write(
            "<br> Lưu ban")

    }

}
