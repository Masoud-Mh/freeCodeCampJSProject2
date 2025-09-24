const inputField = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultDiv = document.getElementById("output");

const checkInput = (input) => {
    const number = parseInt(input);
    if (input.trim() === "" || isNaN(number)) {
        resultDiv.innerText = "Please enter a valid number"
        return;
    }
    else if (number < 1) {
        resultDiv.innerText="Please enter a number greater than or equal to 1"
        return;
    }
    else if (number > 3999) {
        resultDiv.innerText="Please enter a number less than or equal to 3999"
        return ;
    }
    return number;
}

const convertToRoman = (num) => {
    if (num === 0) {
        return "";
    }
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let romanNumeral = "";
    const symsIndex = val.findIndex((element) => element <= num);
    return  syms[symsIndex] + convertToRoman(num - val[symsIndex]);
}

convertBtn.addEventListener("click", () => {
    const input = inputField.value;
    const number = checkInput(input);
    if (number) {
        const romanNumeral = convertToRoman(number);
        resultDiv.innerText = `${romanNumeral}`;
    }
    inputField.value = "";
});
inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        convertBtn.click();
    }
});