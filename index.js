const input = document.getElementById('display');
const button = document.querySelectorAll(".btn button");




let first = "";
let second = "";
let op = "";


button.forEach((item) => {
    item.addEventListener('click', () => {
        const value = item.textContent.trim();
        if (!isNaN(value) || value === ".") {
            if (op === "") {
                first += value;
                input.value = first;
            } else {
                second += value;
                input.value = `${first} ${op} ${second}`;
            }
            
        } else if (["+","-","x","%"].includes(value)) {
            if (first !== "") {
                op = value;
                input.value = `${first} ${op}`;
            } else {
                alert("Please enter a number first.");
            }
        } else if (value === "=") {
            calculate();
        } else if (value === "C") {
            first = "";
            second = "";
            op = "";
            input.value = "";
        }
    })
})



function calculate() {
   let num = parseFloat(first) ;
   let num2 = parseFloat(second);

   if (isNaN(num) || isNaN(num2)) return;

   if (op === "+")    input.value = num + num2;
   else if (op === "-") input.value = num - num2;
   else if (op === "x") input.value = num * num2;
   else if (op === "%") input.value = num % num2;

   first = input.value;
   second = "";
   op = "";
}
