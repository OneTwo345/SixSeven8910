function
    Add() {
    let n1 = +document.getElementById("n1").value;
    let n2 = +document.getElementById("n2").value;
    let Add = n1 + n2
    let result = document.getElementById('result')
    console.log(Add);
    result.innerHTML = "Result: " + Add
};

function
    Sub() {
    let n1 = +document.getElementById("n1").value;
    let n2 = +document.getElementById("n2").value;
    let Sub = n1 - n2
    let result = document.getElementById('result')
    console.log(Sub);
    result.innerHTML = "Result: " + Sub
}; function
    Multip() {
    let n1 = +document.getElementById("n1").value;
    let n2 = +document.getElementById("n2").value;
    let Mul = n1 * n2
    let result = document.getElementById('result')
    console.log(Mul);
    result.innerHTML = "Result: " + Mul
}; function
    Div() {
    let n1 = +document.getElementById("n1").value;
    let n2 = +document.getElementById("n2").value;
    let Div = n1 / n2
    let result = document.getElementById('result')
    console.log(Div);
    result.innerHTML = "Result: " + Div
}