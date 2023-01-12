const birthDate = document.querySelector("#date");
const luckyNumber = document.querySelector("#lucky");
const checkLucky = document.querySelector("#check");

checkLucky.addEventListener("click", checkBirthday);


function validatedValue(sum, luckyNumber){
    if(sum%luckyNumber===0){
        text.innerText =  "Your Birthday is Lucky ✨"
    } else {
         text.innerText = "Not a Lucky birthdate 🙂"
    }
}

function checkBirthday() {
    const  birthday =  birthDate.value;
    const sum = checkSum(birthday);
    if(sum&&birthday) 
    validatedValue(sum, luckyNumber.value);
    else
    text.innerText = "Please Enter the Both Details"
}

function checkSum(birthday){
     
    birthday = birthday.replaceAll("-", "");
    let sum = 0;
  for(let i=0;i< birthday.length;i++){
    sum += Number(birthday.charAt(i));
  }
 return sum;  
    
}