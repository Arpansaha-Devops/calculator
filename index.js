let input = document.getElementById("display")
let buttons = document.querySelectorAll(".btn button")


let first = "";
let second = "";
let op = "";

buttons.forEach((item) => {
    item.addEventListener("click", () => {
        const value = item.textContent.trim()
if (!isNaN(value) || value === ".") {
    if (op === "") {
        first += value;
        input.value = first
    } else {
        second += value;
        input.value = `${first} ${op} ${second}`
    }
} else if ( (["+","-","x","%"]).includes(value)) {
    if (first !== "") {
        op = value;
        input.value = `${first} ${op}`
    }
} else if ( value === "="){
    calculate()
} else if(value === "C") {
    first == "";
    second == "";
    op === "";
}   })
})


function calculate() {
    let num1 = parseFloat(first)
    let num2 = parseFloat(second)

    if (isNaN(num1) || isNaN(num2)) return;

    if (op === "+") input.value = num1 + num2;
    if (op === "-") input.value = num1 - num2;
    if (op === "x") input.value = num1 * num2;
    if (op === "%") input.value = num1 % num2;

    first = String(input.value);
    second = ""
    op = ""
}