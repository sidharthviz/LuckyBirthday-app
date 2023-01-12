const birthDate = document.querySelector("#date");
const luckyNumber = document.querySelector("#lucky");
const checkLucky = document.querySelector("#check");

checkLucky.addEventListener("click", checkBirthday);


function checkBirthday() {
    console.log(birthDate.value, luckyNumber.value)
}